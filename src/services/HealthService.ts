import { injectable } from 'inversify';
import DBConnection from '@/repositories/DBConnection';
import { logger } from '@/common';
import { IHealthService, HealthStatus } from './interfaces';
// import { redisConnection } from './RedisConnection';

@injectable()
export class HealthService implements IHealthService {
	isDbConnected = false;
	isJwtAuthReady = false;
	// isRedisConnected = false;

	async getHealthStatus(): Promise<HealthStatus> {
		if (!this.isDbConnected) {
			try {
				await DBConnection.getConnection();
			} catch (err) {
				logger.error({ err });
				this.isDbConnected = false;
			}
		}

		const isHealthy = this.isDbConnected  && this.isJwtAuthReady;
		return {
			isHealthy: isHealthy,
			status: isHealthy ? 'HEALTHY' : 'UNHEALTHY',
			databaseConnection: this.isDbConnected,
			jwtAuthReady: this.isJwtAuthReady,
		};
	}
}
