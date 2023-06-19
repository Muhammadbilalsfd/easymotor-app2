import { SERVICE_TYPES } from '@/services/ServiceTypes';
import { IHealthService } from '@/services/interfaces';
import { QueryRunner } from 'typeorm';
import { iocContainer } from '@/configs/inversify.config';
import DBConnection from '@/repositories/DBConnection';
import { NODE_ENVIRONMENTS } from '@/constants/EnvironmentConstants';

const queryRunnerParamIndexMetadataKey = Symbol('queryRunnerParamIndex');

function isImplementQueryRunner(object: any): object is QueryRunner {
	return 'startTransaction' in object && 'commitTransaction' in object && 'rollbackTransaction' in object;
}

export function queryRunner(target: Record<string, any>, propertyKey: string | symbol, parameterIndex: number) {
	Reflect.defineMetadata(queryRunnerParamIndexMetadataKey, parameterIndex, target, propertyKey);
}

export function transaction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	if (process.env.NODE_ENV == NODE_ENVIRONMENTS.JEST_TEST) return descriptor; // if jest unit test, ignore decorator

	const originalFunction = descriptor.value;
	descriptor.value = async function (...args: any[]) {
		let result;

		if (!Reflect.hasOwnMetadata(queryRunnerParamIndexMetadataKey, target, propertyKey))
			return Promise.reject(new Error('transaction decorator must be used in conjunction with queryRunner parameter decorator.'));

		const queryRunnerParamIndex = Reflect.getOwnMetadata(queryRunnerParamIndexMetadataKey, target, propertyKey);

		const queryRunner = args[queryRunnerParamIndex];
		if (queryRunner) {
			if (isImplementQueryRunner(queryRunner)) {
				try {
					result = await originalFunction.apply(this, args);
				} catch (error) {
					return Promise.reject(error);
				}
			} else {
				return Promise.reject(
					new Error('Misuse of queryRunner parameter decorator. Decorated parameter must implement QueryRunner interface.')
				);
			}
		} else {
			// queryRunner is undefined. Therefore not passed. Instantiate, inject into params, and execute
			const queryRunner = await (await DBConnection.getConnection()).createQueryRunner();

			try {
				await queryRunner.connect();
				await queryRunner.startTransaction();

				args[queryRunnerParamIndex] = queryRunner;

				result = await originalFunction.apply(this, args);

				await queryRunner.commitTransaction();
			} catch (error: any) {
				if (error.code == 'ECONNREFUSED') {
					const healthService = iocContainer.get<IHealthService>(SERVICE_TYPES.IHealthService);
					healthService.isDbConnected = false;
				}
				await queryRunner.rollbackTransaction();
				return Promise.reject(error);
			} finally {
				await queryRunner.release();
			}
		}

		return result;
	};

	return descriptor;
}
