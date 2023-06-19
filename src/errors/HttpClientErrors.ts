export abstract class HttpClientError extends Error {
	readonly internalCode: string;
	readonly httpStatusCode: number;
	readonly details: unknown;
	readonly headers: unknown;

	constructor(message: string, httpStatusCode: number, internalCode: string, headers: unknown, details: unknown = undefined) {
		super(message);
		this.internalCode = internalCode;
		this.httpStatusCode = httpStatusCode;
		this.details = details;
		this.headers = headers;
	}
}

export class HttpBadRequestError extends HttpClientError {
	constructor(internalCode: string, message = 'Bad Request', headers: unknown, details: unknown = undefined) {
		super(message, 400, internalCode, headers, details);
	}
}

export class HttpUnauthorizedError extends HttpClientError {
	constructor(internalCode: string, message = 'Unauthorized', headers: unknown, details: unknown = undefined) {
		super(message, 401, internalCode, headers, details);
	}
}

export class HttpForbiddenError extends HttpClientError {
	constructor(internalCode: string, message = 'Forbidden', headers: unknown, details: unknown = undefined) {
		super(message, 403, internalCode, headers, details);
	}
}

export class HttpNotFoundError extends HttpClientError {
	constructor(internalCode: string, message = 'Not Found', headers: unknown, details: unknown = undefined) {
		super(message, 404, internalCode, headers, details);
	}
}

export class HttpNotAcceptedError extends HttpClientError {
	constructor(internalCode: string, message = 'Not Accepted', headers: unknown, details: unknown = undefined) {
		super(message, 406, internalCode, headers, details);
	}
}

export class HttpConflictError extends HttpClientError {
	constructor(internalCode: string, message = 'Conflict', headers: unknown, details: unknown = undefined) {
		super(message, 409, internalCode, headers, details);
	}
}
