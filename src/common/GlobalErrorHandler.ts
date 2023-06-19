import { logger } from './Logger';

export const unhandleRejectionHandler = (): void => {
	process.on('unhandledRejection', (err) => {
		logger.error({ err }, 'Unhandled Rejection at Promise');
	});
};

export const uncaughtExceptionHandler = (): void => {
	process.on('uncaughtException', (err) => {
		logger.error({ err }, 'Uncaught Exception thrown');
		process.kill(process.pid, 'SIGINT');
	});
};
