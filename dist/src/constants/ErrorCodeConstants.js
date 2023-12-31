"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMON_AWS_ERROR = exports.COMMON_JWT_UNINITIALISED = exports.COMMON_JWT_TOKEN_INVALID = exports.COMMON_JWT_TOKEN_MISSING = exports.COMMON_NOT_ACCEPTED = exports.COMMON_UNAUTHORISED = exports.COMMON_PATH_NOT_FOUND = exports.COMMON_BAD_REQUEST = void 0;
const COMMON = 'E01';
const GENERAL = '01';
const SECURITY = '02';
const AWS = '03';
const INTERNAL = '04';
const COMMON_BAD_REQUEST = `${COMMON}_${GENERAL}_001`;
exports.COMMON_BAD_REQUEST = COMMON_BAD_REQUEST;
const COMMON_PATH_NOT_FOUND = `${COMMON}_${GENERAL}_002`;
exports.COMMON_PATH_NOT_FOUND = COMMON_PATH_NOT_FOUND;
const COMMON_UNAUTHORISED = `${COMMON}_${GENERAL}_003`;
exports.COMMON_UNAUTHORISED = COMMON_UNAUTHORISED;
const COMMON_NOT_ACCEPTED = `${COMMON}_${GENERAL}_004`;
exports.COMMON_NOT_ACCEPTED = COMMON_NOT_ACCEPTED;
const COMMON_JWT_TOKEN_MISSING = `${COMMON}_${SECURITY}_001`;
exports.COMMON_JWT_TOKEN_MISSING = COMMON_JWT_TOKEN_MISSING;
const COMMON_JWT_TOKEN_INVALID = `${COMMON}_${SECURITY}_002`;
exports.COMMON_JWT_TOKEN_INVALID = COMMON_JWT_TOKEN_INVALID;
const COMMON_JWT_UNINITIALISED = `${COMMON}_${INTERNAL}_001`;
exports.COMMON_JWT_UNINITIALISED = COMMON_JWT_UNINITIALISED;
const COMMON_AWS_ERROR = `${COMMON}_${AWS}_001`;
exports.COMMON_AWS_ERROR = COMMON_AWS_ERROR;
//# sourceMappingURL=ErrorCodeConstants.js.map