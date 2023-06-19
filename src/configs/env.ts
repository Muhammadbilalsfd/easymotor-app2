import pino from 'pino';
import dotenv from 'dotenv';
dotenv.config();

export const isLogEnv = process.env.ENV_LOGGER === 'true';

// temporary logger for debug only
export const envLogger = pino({
	enabled: process.env.LOG_ENABLE ? process.env.LOG_ENABLE === 'true' : true,
	name: process.env.SERVICE_NAME,
	level: 'trace',
	prettyPrint: {
		colorize: true,
		translateTime: true,
	},
});

// report missing env
const warnEmpty = (key: string, value: string | undefined, defaultValue: string): string => {
	if (value) {
		if (isLogEnv) envLogger.debug(`[environment]: ${key}=${value}`);
		return value;
	}
	if (isLogEnv) envLogger.warn(`[empty environment]: default ${key}=${defaultValue}`);
	return defaultValue;
};

// COMMON
export const ENV_LOGGER = warnEmpty('ENV_LOGGER', process.env.ENV_LOGGER, '');
export const ENV = warnEmpty('ENV', process.env.ENV, 'local');
export const SERVICE_NAME = warnEmpty('SERVICE_NAME', process.env.SERVICE_NAME, '');
export const SHUTDOWN_TIMEOUT = warnEmpty('SHUTDOWN_TIMEOUT', process.env.SHUTDOWN_TIMEOUT, '');
export const SERVER_PORT = warnEmpty('SERVER_PORT', process.env.SERVER_PORT, '');
export const LOG_ENABLE = warnEmpty('LOG_ENABLE', process.env.LOG_ENABLE, 'true');
export const LOG_LEVEL = warnEmpty('LOG_LEVEL', process.env.LOG_LEVEL, '');

// DATABASE
export const EM_MYSQL_USER = warnEmpty('NOTIFICATIONS_DB_USER', process.env.EM_MYSQL_USER, '');
export const EM_MYSQL_HOST = warnEmpty('NOTIFICATIONS_DB_HOST', process.env.EM_MYSQL_HOST, '');
export const EM_MYSQL_DATABASE = warnEmpty('NOTIFICATIONS_DB_DATABASE', process.env.EM_MYSQL_DATABASE, '');
export const EM_MYSQL_PORT = warnEmpty('NOTIFICATIONS_DB_PORT', process.env.EM_MYSQL_PORT, '5432');
export const EM_MYSQL_PASSWORD = warnEmpty('EM_MYSQL_PASSWORD', process.env.EM_MYSQL_PASSWORD, '');
