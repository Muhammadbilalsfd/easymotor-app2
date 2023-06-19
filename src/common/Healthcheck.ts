import { TerminusOptions, createTerminus, HealthCheckError } from '@godaddy/terminus';
import { logger } from '@/common';
import { SHUTDOWN_TIMEOUT, iocContainer } from '@/configs';
import { Server } from 'http';
import { SERVICE_TYPES, IHealthService } from '@/services';
import DBConnection from '@/repositories/DBConnection';
// import { redisConnection } from '@/services/RedisConnection';

export const registerHealthcheck = (server: Server): TerminusOptions => {
	const onSignal = async () => {
		logger.info('[healthcheck]: server is starting cleanup...');
		await new Promise<void>((resolve) => {
			logger.info(`[healthcheck]: give ${SHUTDOWN_TIMEOUT} seconds to before exited`);
			setTimeout(() => {
				logger.info('[healthcheck]: force shutdown');
				resolve();
			}, (Number(SHUTDOWN_TIMEOUT) * 1000) / 2);
		});
	};

	const onShutdown = async () => {
		logger.info('[healthcheck]: cleanup finished, server is shutting down');
		// exit stream just before the last log
		// giving sometime to sent last log before exit
		await new Promise<void>((resolve) => {
			setTimeout(async () => {
				await Promise.all([DBConnection.destroyConnection()]);
				// if (cloudwatchStream) {
				// 	// cloudwatchStream.kill(0);
				// }
				resolve();
			}, (Number(SHUTDOWN_TIMEOUT) * 1000) / 2);
		});
	};

	const onSendFailureDuringShutdown = async () => {
		logger.debug('[healthcheck]: received healthcheck request while shutting down');
	};

	const onHealthCheck = async () => {
		const healthService = iocContainer.get<IHealthService>(SERVICE_TYPES.IHealthService);
		const healthStatus = await healthService.getHealthStatus();
		if (!healthStatus.isHealthy) throw new HealthCheckError('unhealthy', JSON.stringify(healthStatus));
		return healthStatus;
	};

	const options = {
		signals: ['SIGINT', 'SIGTERM'],
		onSignal, // cleanup function
		// onShutdown, // finished cleanup function
		sendFailuresDuringShutdown: true, // reject health check during shutdown
		onSendFailureDuringShutdown,
		healthChecks: { '/healthcheck': onHealthCheck },
	};

	createTerminus(server, options);

	return options;
};
