import { Product } from '@/entity';
export type HealthStatus = {
    isHealthy: boolean;
    status: string;
    databaseConnection: boolean;
    jwtAuthReady: boolean;
};
export interface IHealthService {
    isDbConnected: boolean;
    isJwtAuthReady: boolean;
    getHealthStatus(): Promise<HealthStatus>;
}
export interface IProductService {
    save(product: Product): Promise<any>;
    findAll(): Promise<any>;
}
export interface IUserService {
    save(product: Product): Promise<any>;
    findAll(): Promise<any>;
}
