import { IJwtValidator } from '@pixcap/jwt-auth';
declare const JWT: {
    validator?: IJwtValidator;
};
export declare function initJwtValidator(): Promise<void>;
export default JWT;
