"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initJwtValidator = void 0;
const inversify_config_1 = require("./inversify.config");
const ServiceTypes_1 = require("@/services/ServiceTypes");
const constants_1 = require("@/constants");
const Logger_1 = require("@/common/Logger");
const JWT = {};
async function initJwtValidator() {
    const healthService = inversify_config_1.iocContainer.get(ServiceTypes_1.SERVICE_TYPES.IHealthService);
    try {
        if (process.env.NODE_ENV == constants_1.NODE_ENVIRONMENTS.PRODUCTION) {
            healthService.isJwtAuthReady = true;
        }
        else {
            healthService.isJwtAuthReady = true;
            JWT.validator = {
                validateToken: function (token) {
                    return JSON.parse(token);
                },
            };
        }
    }
    catch (err) {
        Logger_1.logger.error({ err }, 'JwtValidator Error: ');
        healthService.isJwtAuthReady = false;
        throw err;
    }
}
exports.initJwtValidator = initJwtValidator;
exports.default = JWT;
//# sourceMappingURL=JwtValidator.js.map