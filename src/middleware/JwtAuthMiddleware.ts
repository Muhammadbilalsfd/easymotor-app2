import { Request, Response, NextFunction } from 'express';
import JWT from '../configs/JwtValidator';


export function JwtAuthMiddleware(isRequired: boolean = true) {
	return async (req: Request, res: Response, next: NextFunction) => {
		if (!JWT.validator) throw new Error('JwtValidator is not initialised yet! API is not ready to serve requests.');

		const BEARER_PREFIX = 'Bearer ';
		const authorization = req.headers.authorization;
		if (!authorization || !authorization.startsWith(BEARER_PREFIX)) {
			if (isRequired) {
				return res.status(401).send();
			} else {
				return next();
			}
		}
		try {
			const token = authorization.substring(BEARER_PREFIX.length);
			const decodedPayload = JWT.validator.validateToken(token);
			req.claims = decodedPayload;
		} catch (error) {
			if (isRequired) {
				return next(error);
			} else {
				return next();
				
			}
		}
		return next();
	};
}
