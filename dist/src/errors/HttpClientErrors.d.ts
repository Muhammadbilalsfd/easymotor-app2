export declare abstract class HttpClientError extends Error {
    readonly internalCode: string;
    readonly httpStatusCode: number;
    readonly details: unknown;
    readonly headers: unknown;
    constructor(message: string, httpStatusCode: number, internalCode: string, headers: unknown, details?: unknown);
}
export declare class HttpBadRequestError extends HttpClientError {
    constructor(internalCode: string, message: string | undefined, headers: unknown, details?: unknown);
}
export declare class HttpUnauthorizedError extends HttpClientError {
    constructor(internalCode: string, message: string | undefined, headers: unknown, details?: unknown);
}
export declare class HttpForbiddenError extends HttpClientError {
    constructor(internalCode: string, message: string | undefined, headers: unknown, details?: unknown);
}
export declare class HttpNotFoundError extends HttpClientError {
    constructor(internalCode: string, message: string | undefined, headers: unknown, details?: unknown);
}
export declare class HttpNotAcceptedError extends HttpClientError {
    constructor(internalCode: string, message: string | undefined, headers: unknown, details?: unknown);
}
export declare class HttpConflictError extends HttpClientError {
    constructor(internalCode: string, message: string | undefined, headers: unknown, details?: unknown);
}
