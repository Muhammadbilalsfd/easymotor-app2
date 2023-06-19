import { IHealthService, HealthStatus } from './interfaces';
export declare class HealthService implements IHealthService {
    isDbConnected: boolean;
    isJwtAuthReady: boolean;
    getHealthStatus(): Promise<HealthStatus>;
}
