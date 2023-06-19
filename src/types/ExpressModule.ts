import { CognitoDecodedClaims } from '@pixcap/jwt-auth';

declare module 'express-serve-static-core' {
	interface Request {
		claims?: CognitoDecodedClaims;
	}
}
