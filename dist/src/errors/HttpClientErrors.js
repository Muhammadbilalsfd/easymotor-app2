"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpConflictError = exports.HttpNotAcceptedError = exports.HttpNotFoundError = exports.HttpForbiddenError = exports.HttpUnauthorizedError = exports.HttpBadRequestError = exports.HttpClientError = void 0;
class HttpClientError extends Error {
    constructor(message, httpStatusCode, internalCode, headers, details = undefined) {
        super(message);
        this.internalCode = internalCode;
        this.httpStatusCode = httpStatusCode;
        this.details = details;
        this.headers = headers;
    }
}
exports.HttpClientError = HttpClientError;
class HttpBadRequestError extends HttpClientError {
    constructor(internalCode, message = 'Bad Request', headers, details = undefined) {
        super(message, 400, internalCode, headers, details);
    }
}
exports.HttpBadRequestError = HttpBadRequestError;
class HttpUnauthorizedError extends HttpClientError {
    constructor(internalCode, message = 'Unauthorized', headers, details = undefined) {
        super(message, 401, internalCode, headers, details);
    }
}
exports.HttpUnauthorizedError = HttpUnauthorizedError;
class HttpForbiddenError extends HttpClientError {
    constructor(internalCode, message = 'Forbidden', headers, details = undefined) {
        super(message, 403, internalCode, headers, details);
    }
}
exports.HttpForbiddenError = HttpForbiddenError;
class HttpNotFoundError extends HttpClientError {
    constructor(internalCode, message = 'Not Found', headers, details = undefined) {
        super(message, 404, internalCode, headers, details);
    }
}
exports.HttpNotFoundError = HttpNotFoundError;
class HttpNotAcceptedError extends HttpClientError {
    constructor(internalCode, message = 'Not Accepted', headers, details = undefined) {
        super(message, 406, internalCode, headers, details);
    }
}
exports.HttpNotAcceptedError = HttpNotAcceptedError;
class HttpConflictError extends HttpClientError {
    constructor(internalCode, message = 'Conflict', headers, details = undefined) {
        super(message, 409, internalCode, headers, details);
    }
}
exports.HttpConflictError = HttpConflictError;
//# sourceMappingURL=HttpClientErrors.js.map