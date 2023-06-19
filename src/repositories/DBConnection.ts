import { iocContainer } from '../configs/inversify.config';
import { IHealthService } from '@/services/interfaces';
import { SERVICE_TYPES } from '@/services//ServiceTypes';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as entities from '@/entity';
import {
	EM_MYSQL_DATABASE,
	EM_MYSQL_HOST,
	EM_MYSQL_PORT,
	EM_MYSQL_USER,
	ENV,
	EM_MYSQL_PASSWORD,
} from '@/configs';
import { NODE_ENVIRONMENTS } from '@/constants';

class DBConnection {
	private _connection: Connection | undefined;

	async getConnection(): Promise<Connection> {
		if (this._connection) return this._connection;
		const _entities: any = entities;
		let cache = false || {};
		const connectionOptions: ConnectionOptions = {
			name: 'default',
			type: 'mysql',
			host: EM_MYSQL_HOST,
			port: Number(EM_MYSQL_PORT),
			username: EM_MYSQL_USER,
			password: EM_MYSQL_PASSWORD,
			database: EM_MYSQL_DATABASE,
			synchronize: false,
			logging: true,
			entities: Object.keys(_entities).map((module) => _entities[module]),
			cache: cache,
			namingStrategy: new SnakeNamingStrategy(),
		};

		const healthService = iocContainer.get<IHealthService>(SERVICE_TYPES.IHealthService);
		try {
			this._connection = await createConnection(connectionOptions);
			if (this._connection) healthService.isDbConnected = true;
		} catch (error) {
			healthService.isDbConnected = false;
			return Promise.reject(error);
		}

		return this._connection;
	}

	async destroyConnection() {
		if (this._connection) await this._connection.close();
	}
}

const dbConnection = new DBConnection();
export default dbConnection;
