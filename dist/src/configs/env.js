"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EM_MYSQL_PASSWORD = exports.NOTIFICATIONS_DB_PORT = exports.NOTIFICATIONS_DB_DATABASE = exports.NOTIFICATIONS_DB_HOST = exports.NOTIFICATIONS_DB_USER = exports.LOG_LEVEL = exports.LOG_ENABLE = exports.SERVER_PORT = exports.SHUTDOWN_TIMEOUT = exports.SERVICE_NAME = exports.ENV = exports.ENV_LOGGER = exports.envLogger = exports.isLogEnv = void 0;
const pino_1 = __importDefault(require("pino"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.isLogEnv = process.env.ENV_LOGGER === 'true';
exports.envLogger = (0, pino_1.default)({
    enabled: process.env.LOG_ENABLE ? process.env.LOG_ENABLE === 'true' : true,
    name: process.env.SERVICE_NAME,
    level: 'trace',
    prettyPrint: {
        colorize: true,
        translateTime: true,
    },
});
const warnEmpty = (key, value, defaultValue) => {
    if (value) {
        if (exports.isLogEnv)
            exports.envLogger.debug(`[environment]: ${key}=${value}`);
        return value;
    }
    if (exports.isLogEnv)
        exports.envLogger.warn(`[empty environment]: default ${key}=${defaultValue}`);
    return defaultValue;
};
exports.ENV_LOGGER = warnEmpty('ENV_LOGGER', process.env.ENV_LOGGER, '');
exports.ENV = warnEmpty('ENV', process.env.ENV, 'local');
exports.SERVICE_NAME = warnEmpty('SERVICE_NAME', process.env.SERVICE_NAME, '');
exports.SHUTDOWN_TIMEOUT = warnEmpty('SHUTDOWN_TIMEOUT', process.env.SHUTDOWN_TIMEOUT, '');
exports.SERVER_PORT = warnEmpty('SERVER_PORT', process.env.SERVER_PORT, '');
exports.LOG_ENABLE = warnEmpty('LOG_ENABLE', process.env.LOG_ENABLE, 'true');
exports.LOG_LEVEL = warnEmpty('LOG_LEVEL', process.env.LOG_LEVEL, '');
exports.NOTIFICATIONS_DB_USER = warnEmpty('NOTIFICATIONS_DB_USER', process.env.EM_MYSQL_USER, '');
exports.NOTIFICATIONS_DB_HOST = warnEmpty('NOTIFICATIONS_DB_HOST', process.env.EM_MYSQL_HOST, '');
exports.NOTIFICATIONS_DB_DATABASE = warnEmpty('NOTIFICATIONS_DB_DATABASE', process.env.EM_MYSQL_DATABASE, '');
exports.NOTIFICATIONS_DB_PORT = warnEmpty('NOTIFICATIONS_DB_PORT', process.env.EM_MYSQL_PORT, '5432');
exports.EM_MYSQL_PASSWORD = warnEmpty('EM_MYSQL_PASSWORD', process.env.EM_MYSQL_PASSWORD, '');
//# sourceMappingURL=env.js.map