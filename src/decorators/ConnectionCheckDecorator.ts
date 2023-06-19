import { iocContainer } from '@/configs/inversify.config';
import { SERVICE_TYPES, IHealthService } from '@/services';
/**
 * Decorate on methods querying database. It performs check whether database connection is healthy. If not, inform health service of unhealth connection.
 * @param target
 * @param propertyKey
 * @param descriptor
 */
export function connectionCheck(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
	const originalFunction = descriptor.value;
	descriptor.value = async function (...args: any[]) {
		const healthService = iocContainer.get<IHealthService>(SERVICE_TYPES.IHealthService);
		let result;
		try {
			result = await originalFunction.apply(this, args);
		} catch (error: any) {
			if (error.code == 'ECONNREFUSED') healthService.isDbConnected = false;
			return Promise.reject(error);
		}
		healthService.isDbConnected = true;
		return result;
	};

	return descriptor;
}
