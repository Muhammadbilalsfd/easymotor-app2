"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const configs_1 = require("@/configs");
const pino_1 = __importDefault(require("pino"));
const { ENV = 'local', DISABLE_CLOUDWATCH } = process.env;
let logger;
if (ENV === 'local') {
    exports.logger = logger = (0, pino_1.default)({
        name: configs_1.SERVICE_NAME,
        level: 'trace',
        redact: ['data.Body', 'err.config.span', 'req.headers.cookie', 'req.headers.authorization'],
        prettyPrint: {
            colorize: true,
            translateTime: true,
        },
    });
}
else {
    exports.logger = logger = (0, pino_1.default)({
        name: configs_1.SERVICE_NAME,
        level: 'info',
        redact: ['data.Body', 'err.config.span', 'req.headers.cookie', 'req.headers.authorization'],
    });
}
//# sourceMappingURL=Logger.js.map