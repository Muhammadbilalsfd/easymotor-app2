"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHealthcheck = void 0;
const terminus_1 = require("@godaddy/terminus");
const common_1 = require("@/common");
const configs_1 = require("@/configs");
const services_1 = require("@/services");
const DBConnection_1 = __importDefault(require("@/repositories/DBConnection"));
const registerHealthcheck = (server) => {
    const onSignal = async () => {
        common_1.logger.info('[healthcheck]: server is starting cleanup...');
        await new Promise((resolve) => {
            common_1.logger.info(`[healthcheck]: give ${configs_1.SHUTDOWN_TIMEOUT} seconds to before exited`);
            setTimeout(() => {
                common_1.logger.info('[healthcheck]: force shutdown');
                resolve();
            }, (Number(configs_1.SHUTDOWN_TIMEOUT) * 1000) / 2);
        });
    };
    const onShutdown = async () => {
        common_1.logger.info('[healthcheck]: cleanup finished, server is shutting down');
        await new Promise((resolve) => {
            setTimeout(async () => {
                await Promise.all([DBConnection_1.default.destroyConnection()]);
                resolve();
            }, (Number(configs_1.SHUTDOWN_TIMEOUT) * 1000) / 2);
        });
    };
    const onSendFailureDuringShutdown = async () => {
        common_1.logger.debug('[healthcheck]: received healthcheck request while shutting down');
    };
    const onHealthCheck = async () => {
        const healthService = configs_1.iocContainer.get(services_1.SERVICE_TYPES.IHealthService);
        const healthStatus = await healthService.getHealthStatus();
        if (!healthStatus.isHealthy)
            throw new terminus_1.HealthCheckError('unhealthy', JSON.stringify(healthStatus));
        return healthStatus;
    };
    const options = {
        signals: ['SIGINT', 'SIGTERM'],
        onSignal,
        sendFailuresDuringShutdown: true,
        onSendFailureDuringShutdown,
        healthChecks: { '/healthcheck': onHealthCheck },
    };
    (0, terminus_1.createTerminus)(server, options);
    return options;
};
exports.registerHealthcheck = registerHealthcheck;
//# sourceMappingURL=Healthcheck.js.map