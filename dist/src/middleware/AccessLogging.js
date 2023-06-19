"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessLogging = void 0;
const pino_http_1 = __importDefault(require("pino-http"));
const Logger_1 = require("@/common/Logger");
const uuid_1 = require("uuid");
const accessLogging = () => (0, pino_http_1.default)({
    logger: Logger_1.logger,
    genReqId: function (req) {
        const reqId = req.headers['x-request-id'];
        return reqId ? reqId : (0, uuid_1.v4)();
    },
    customLogLevel: ({ statusCode }, err) => {
        if (statusCode >= 400 && statusCode < 500)
            return 'warn';
        if (statusCode >= 500 || err)
            return 'error';
        return 'info';
    },
});
exports.accessLogging = accessLogging;
//# sourceMappingURL=AccessLogging.js.map