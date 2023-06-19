import { COMMON_AWS_ERROR, COMMON_PATH_NOT_FOUND } from '@/constants';
import { ErrorRequestHandler, RequestHandler } from 'express';
import { HttpBadRequestError, HttpClientError, HttpNotFoundError } from '@/errors';
import { ErrorResponse } from '@/dtos';
import { logger } from '@/common';

const sendErrorResponse = ({ message, details, internalCode, headers }: HttpClientError): ErrorResponse => ({
	errorMessage: message,
	errorDetails: details,
	errorCode: internalCode,
	headers: headers,
});

// request not match any routes
export const notFoundErrorHandler = (): RequestHandler => () => {
	throw new HttpNotFoundError(COMMON_PATH_NOT_FOUND, 'route not found', {});
};

export const awsErrorHandler = (): ErrorRequestHandler => (err, _request, _response, next) => {
	if (err.name === 'InvalidParameterException' || err.name === 'LimitExceededException' || err.name === 'TooManyRequestsException') {
		logger.warn({ err }, 'AWS - Common Error');
		next(new HttpBadRequestError(COMMON_AWS_ERROR, err.message, {}));
	} else {
		next(err);
	}
};

export const clientErrorHandler = (): ErrorRequestHandler => (err, _request, response, next) => {
	if (err instanceof HttpClientError) {
		response.header(err.headers);
		response.status(err.httpStatusCode).send(sendErrorResponse(err));
	} else {
		next(err);
	}
};

export const serverErrorHandler = (): ErrorRequestHandler => (err, _request, response, next) => {
	logger.error({ err }, '500 - Internal Server Error');
	response.header('auth-error', Buffer.from(err.message, 'binary').toString('base64'));
	response.status(500).send('Internal Server Error');
	next();
};

export const jsonParserErrorHandler = (): ErrorRequestHandler => (err, _request, response, next) => {
	if (err instanceof SyntaxError) {
		response.status(400).send(err.message);
	} else {
		next();
	}
};
