import 'reflect-metadata';
import './types';
import express from 'express';
import DBConnection from './repositories/DBConnection';
import { notFoundErrorHandler, awsErrorHandler, clientErrorHandler, serverErrorHandler, jsonParserErrorHandler } from '@/middleware';
import { registerMetric } from './common/Metric';
import { initJwtValidator } from './configs/JwtValidator';
import { accessLogging } from '@/middleware/AccessLogging';
import { logger } from './common/Logger';
import { registerHealthcheck, uncaughtExceptionHandler, unhandleRejectionHandler } from './common';
import { ENV, envLogger, SERVER_PORT, SERVICE_NAME } from './configs';
import { setUpProductController} from './controllers';
import cors from 'cors';
import { setUpUserController } from './controllers/UserController';

// global handle error when startup
unhandleRejectionHandler();
uncaughtExceptionHandler();

async function startUp() {
	try {
		const app = express();

		app.use(express.json()); // for parsing application/json

		// Prometheus
		registerMetric(app);

		app.use(accessLogging());
		
		await initJwtValidator();

		setUpProductController(app)
		setUpUserController(app)

		// Custom error handler middleware MUST be defined last
		app.use(notFoundErrorHandler())
		// app.use(awsErrorHandler());
		app.use(clientErrorHandler())
		app.use(serverErrorHandler())
		app.use(jsonParserErrorHandler())

		// start the Express server
		const server = app.listen(SERVER_PORT, () => {
			logger.info(`service ${SERVICE_NAME} started at http://localhost:${SERVER_PORT}`);
		});
		registerHealthcheck(server);
	} catch (err: any) {
		envLogger.warn(err);
		envLogger.warn(err.message);
		envLogger.warn('FAIL AT START UP');
		logger.error({ err }, `===> Failed to start up: ${err.message}`);
		await DBConnection.destroyConnection();
		process.exit(1);
	}
}

startUp();
