"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uncaughtExceptionHandler = exports.unhandleRejectionHandler = void 0;
const Logger_1 = require("./Logger");
const unhandleRejectionHandler = () => {
    process.on('unhandledRejection', (err) => {
        Logger_1.logger.error({ err }, 'Unhandled Rejection at Promise');
    });
};
exports.unhandleRejectionHandler = unhandleRejectionHandler;
const uncaughtExceptionHandler = () => {
    process.on('uncaughtException', (err) => {
        Logger_1.logger.error({ err }, 'Uncaught Exception thrown');
        process.kill(process.pid, 'SIGINT');
    });
};
exports.uncaughtExceptionHandler = uncaughtExceptionHandler;
//# sourceMappingURL=GlobalErrorHandler.js.map