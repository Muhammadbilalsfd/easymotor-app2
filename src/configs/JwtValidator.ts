import { IJwtValidator, JwtValidator, AwsJwk, CognitoDecodedClaims } from '@pixcap/jwt-auth';
import axios from 'axios';
import { iocContainer } from './inversify.config';
import { IHealthService } from '@/services/interfaces';
import { SERVICE_TYPES } from '@/services/ServiceTypes';
import { NODE_ENVIRONMENTS } from '@/constants';
import { logger } from '@/common/Logger';
// import { COGNITO_JWK_URL } from './env';

const JWT: { validator?: IJwtValidator } = {};

export async function initJwtValidator() {
	const healthService = iocContainer.get<IHealthService>(SERVICE_TYPES.IHealthService);
	try {
		if (process.env.NODE_ENV == NODE_ENVIRONMENTS.PRODUCTION) {
			// Initialise JwtValidator with jwks from AWS Cognito
			// const response = await axios.get(COGNITO_JWK_URL);
			// const cognitoKeys: AwsJwk[] = response.data.keys;
			// JWT.validator = new JwtValidator(cognitoKeys);
			healthService.isJwtAuthReady = true;
		} else {
			// Integration and unit tests passes the token claims as json stringified in Auth header
			healthService.isJwtAuthReady = true;
			JWT.validator = {
				validateToken: function (token: string): CognitoDecodedClaims {
					return JSON.parse(token) as CognitoDecodedClaims;
				},
			};
		}
	} catch (err) {
		logger.error({ err }, 'JwtValidator Error: ');
		healthService.isJwtAuthReady = false;
		throw err;
	}
}

export default JWT;
