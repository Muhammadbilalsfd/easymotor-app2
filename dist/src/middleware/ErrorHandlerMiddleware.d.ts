import { ErrorRequestHandler, RequestHandler } from 'express';
export declare const notFoundErrorHandler: () => RequestHandler;
export declare const awsErrorHandler: () => ErrorRequestHandler;
export declare const clientErrorHandler: () => ErrorRequestHandler;
export declare const serverErrorHandler: () => ErrorRequestHandler;
export declare const jsonParserErrorHandler: () => ErrorRequestHandler;
