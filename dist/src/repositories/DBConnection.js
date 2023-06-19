"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_config_1 = require("../configs/inversify.config");
const ServiceTypes_1 = require("@/services//ServiceTypes");
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const entities = __importStar(require("@/entity"));
const configs_1 = require("@/configs");
class DBConnection {
    async getConnection() {
        if (this._connection)
            return this._connection;
        const _entities = entities;
        let cache = false || {};
        const connectionOptions = {
            name: 'default',
            type: 'mysql',
            host: configs_1.NOTIFICATIONS_DB_HOST,
            port: Number(configs_1.NOTIFICATIONS_DB_PORT),
            username: configs_1.NOTIFICATIONS_DB_USER,
            password: configs_1.EM_MYSQL_PASSWORD,
            database: configs_1.NOTIFICATIONS_DB_DATABASE,
            synchronize: false,
            logging: true,
            entities: Object.keys(_entities).map((module) => _entities[module]),
            cache: cache,
            namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
        };
        const healthService = inversify_config_1.iocContainer.get(ServiceTypes_1.SERVICE_TYPES.IHealthService);
        try {
            this._connection = await (0, typeorm_1.createConnection)(connectionOptions);
            if (this._connection)
                healthService.isDbConnected = true;
        }
        catch (error) {
            healthService.isDbConnected = false;
            return Promise.reject(error);
        }
        return this._connection;
    }
    async destroyConnection() {
        if (this._connection)
            await this._connection.close();
    }
}
const dbConnection = new DBConnection();
exports.default = dbConnection;
//# sourceMappingURL=DBConnection.js.map