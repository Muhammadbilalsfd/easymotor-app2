"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParserErrorHandler = exports.serverErrorHandler = exports.clientErrorHandler = exports.awsErrorHandler = exports.notFoundErrorHandler = void 0;
const constants_1 = require("@/constants");
const errors_1 = require("@/errors");
const common_1 = require("@/common");
const sendErrorResponse = ({ message, details, internalCode, headers }) => ({
    errorMessage: message,
    errorDetails: details,
    errorCode: internalCode,
    headers: headers,
});
const notFoundErrorHandler = () => () => {
    throw new errors_1.HttpNotFoundError(constants_1.COMMON_PATH_NOT_FOUND, 'route not found', {});
};
exports.notFoundErrorHandler = notFoundErrorHandler;
const awsErrorHandler = () => (err, _request, _response, next) => {
    if (err.name === 'InvalidParameterException' || err.name === 'LimitExceededException' || err.name === 'TooManyRequestsException') {
        common_1.logger.warn({ err }, 'AWS - Common Error');
        next(new errors_1.HttpBadRequestError(constants_1.COMMON_AWS_ERROR, err.message, {}));
    }
    else {
        next(err);
    }
};
exports.awsErrorHandler = awsErrorHandler;
const clientErrorHandler = () => (err, _request, response, next) => {
    if (err instanceof errors_1.HttpClientError) {
        response.header(err.headers);
        response.status(err.httpStatusCode).send(sendErrorResponse(err));
    }
    else {
        next(err);
    }
};
exports.clientErrorHandler = clientErrorHandler;
const serverErrorHandler = () => (err, _request, response, next) => {
    common_1.logger.error({ err }, '500 - Internal Server Error');
    response.header('auth-error', Buffer.from(err.message, 'binary').toString('base64'));
    response.status(500).send('Internal Server Error');
    next();
};
exports.serverErrorHandler = serverErrorHandler;
const jsonParserErrorHandler = () => (err, _request, response, next) => {
    if (err instanceof SyntaxError) {
        response.status(400).send(err.message);
    }
    else {
        next();
    }
};
exports.jsonParserErrorHandler = jsonParserErrorHandler;
//# sourceMappingURL=ErrorHandlerMiddleware.js.map