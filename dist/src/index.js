"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./types");
const express_1 = __importDefault(require("express"));
const DBConnection_1 = __importDefault(require("./repositories/DBConnection"));
const middleware_1 = require("@/middleware");
const JwtValidator_1 = require("./configs/JwtValidator");
const AccessLogging_1 = require("@/middleware/AccessLogging");
const Logger_1 = require("./common/Logger");
const common_1 = require("./common");
const configs_1 = require("./configs");
const controllers_1 = require("./controllers");
const UserController_1 = require("./controllers/UserController");
(0, common_1.unhandleRejectionHandler)();
(0, common_1.uncaughtExceptionHandler)();
async function startUp() {
    try {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use((0, AccessLogging_1.accessLogging)());
        await (0, JwtValidator_1.initJwtValidator)();
        (0, controllers_1.setUpProductController)(app);
        (0, UserController_1.setUpUserController)(app);
        app.use((0, middleware_1.notFoundErrorHandler)());
        app.use((0, middleware_1.clientErrorHandler)());
        app.use((0, middleware_1.serverErrorHandler)());
        app.use((0, middleware_1.jsonParserErrorHandler)());
        const server = app.listen(configs_1.SERVER_PORT, () => {
            Logger_1.logger.info(`service ${configs_1.SERVICE_NAME} started at http://localhost:${configs_1.SERVER_PORT}`);
        });
        (0, common_1.registerHealthcheck)(server);
    }
    catch (err) {
        configs_1.envLogger.warn(err);
        configs_1.envLogger.warn(err.message);
        configs_1.envLogger.warn('FAIL AT START UP');
        Logger_1.logger.error({ err }, `===> Failed to start up: ${err.message}`);
        await DBConnection_1.default.destroyConnection();
        process.exit(1);
    }
}
startUp();
//# sourceMappingURL=index.js.map