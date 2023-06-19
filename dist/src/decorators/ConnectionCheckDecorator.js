"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionCheck = void 0;
const inversify_config_1 = require("@/configs/inversify.config");
const services_1 = require("@/services");
function connectionCheck(_target, _propertyKey, descriptor) {
    const originalFunction = descriptor.value;
    descriptor.value = async function (...args) {
        const healthService = inversify_config_1.iocContainer.get(services_1.SERVICE_TYPES.IHealthService);
        let result;
        try {
            result = await originalFunction.apply(this, args);
        }
        catch (error) {
            if (error.code == 'ECONNREFUSED')
                healthService.isDbConnected = false;
            return Promise.reject(error);
        }
        healthService.isDbConnected = true;
        return result;
    };
    return descriptor;
}
exports.connectionCheck = connectionCheck;
//# sourceMappingURL=ConnectionCheckDecorator.js.map