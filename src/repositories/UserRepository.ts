import { id, injectable } from 'inversify';
import { User } from '@/entity';
import { IUserRepository } from './interfaces';
import { connectionCheck } from '@/decorators';
import DBConnection from './DBConnection';
import { v4 as uuidv4 } from 'uuid';
import { In, QueryRunner } from 'typeorm';

@injectable()
export class UserRepository implements IUserRepository {
    
	@connectionCheck
	async save(user: User, queryRunner?: QueryRunner): Promise<User> {
		const now = new Date().toISOString();
		const userRepository = await this._getUserRepository(queryRunner);
		return await userRepository.save(user);
	}

	@connectionCheck
	async findAll(_userId: string, _queryRunner?: QueryRunner): Promise<User | undefined> {
		// const userRepository = await this._getUserRepository(queryRunner);
        return 
	}

	private async _getUserRepository(queryRunner?: QueryRunner) {
		if (queryRunner) {
			return queryRunner.manager.getRepository(User);
		} else {
			const connection = await DBConnection.getConnection();
			return connection.getRepository(User);
		}
	}
}
