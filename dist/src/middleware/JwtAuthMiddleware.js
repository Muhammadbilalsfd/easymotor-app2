"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthMiddleware = void 0;
const JwtValidator_1 = __importDefault(require("../configs/JwtValidator"));
function JwtAuthMiddleware(isRequired = true) {
    return async (req, res, next) => {
        if (!JwtValidator_1.default.validator)
            throw new Error('JwtValidator is not initialised yet! API is not ready to serve requests.');
        const BEARER_PREFIX = 'Bearer ';
        const authorization = req.headers.authorization;
        if (!authorization || !authorization.startsWith(BEARER_PREFIX)) {
            if (isRequired) {
                return res.status(401).send();
            }
            else {
                return next();
            }
        }
        try {
            const token = authorization.substring(BEARER_PREFIX.length);
            const decodedPayload = JwtValidator_1.default.validator.validateToken(token);
            req.claims = decodedPayload;
        }
        catch (error) {
            if (isRequired) {
                return next(error);
            }
            else {
                return next();
            }
        }
        return next();
    };
}
exports.JwtAuthMiddleware = JwtAuthMiddleware;
//# sourceMappingURL=JwtAuthMiddleware.js.map