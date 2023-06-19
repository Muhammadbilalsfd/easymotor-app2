"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transaction = exports.queryRunner = void 0;
const ServiceTypes_1 = require("@/services/ServiceTypes");
const inversify_config_1 = require("@/configs/inversify.config");
const DBConnection_1 = __importDefault(require("@/repositories/DBConnection"));
const EnvironmentConstants_1 = require("@/constants/EnvironmentConstants");
const queryRunnerParamIndexMetadataKey = Symbol('queryRunnerParamIndex');
function isImplementQueryRunner(object) {
    return 'startTransaction' in object && 'commitTransaction' in object && 'rollbackTransaction' in object;
}
function queryRunner(target, propertyKey, parameterIndex) {
    Reflect.defineMetadata(queryRunnerParamIndexMetadataKey, parameterIndex, target, propertyKey);
}
exports.queryRunner = queryRunner;
function transaction(target, propertyKey, descriptor) {
    if (process.env.NODE_ENV == EnvironmentConstants_1.NODE_ENVIRONMENTS.JEST_TEST)
        return descriptor;
    const originalFunction = descriptor.value;
    descriptor.value = async function (...args) {
        let result;
        if (!Reflect.hasOwnMetadata(queryRunnerParamIndexMetadataKey, target, propertyKey))
            return Promise.reject(new Error('transaction decorator must be used in conjunction with queryRunner parameter decorator.'));
        const queryRunnerParamIndex = Reflect.getOwnMetadata(queryRunnerParamIndexMetadataKey, target, propertyKey);
        const queryRunner = args[queryRunnerParamIndex];
        if (queryRunner) {
            if (isImplementQueryRunner(queryRunner)) {
                try {
                    result = await originalFunction.apply(this, args);
                }
                catch (error) {
                    return Promise.reject(error);
                }
            }
            else {
                return Promise.reject(new Error('Misuse of queryRunner parameter decorator. Decorated parameter must implement QueryRunner interface.'));
            }
        }
        else {
            const queryRunner = await (await DBConnection_1.default.getConnection()).createQueryRunner();
            try {
                await queryRunner.connect();
                await queryRunner.startTransaction();
                args[queryRunnerParamIndex] = queryRunner;
                result = await originalFunction.apply(this, args);
                await queryRunner.commitTransaction();
            }
            catch (error) {
                if (error.code == 'ECONNREFUSED') {
                    const healthService = inversify_config_1.iocContainer.get(ServiceTypes_1.SERVICE_TYPES.IHealthService);
                    healthService.isDbConnected = false;
                }
                await queryRunner.rollbackTransaction();
                return Promise.reject(error);
            }
            finally {
                await queryRunner.release();
            }
        }
        return result;
    };
    return descriptor;
}
exports.transaction = transaction;
//# sourceMappingURL=TransactionDecorator.js.map