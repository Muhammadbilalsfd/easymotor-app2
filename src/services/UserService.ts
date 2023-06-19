import { logger } from '@/common';
import { User } from '@/entity';
import {
	IUserRepository,
	REPOSITORY_TYPES,
} from '@/repositories';
import DBConnection from '@/repositories/DBConnection';
import { inject, injectable } from 'inversify';
import { IUserService } from './interfaces';
import { SERVICE_TYPES } from './ServiceTypes';

import { QueryRunner } from 'typeorm';
import { ENV } from '@/configs';

@injectable()
export class UserService implements IUserService {
	constructor(
		@inject(REPOSITORY_TYPES.IUserRepository) private readonly _usersRepository: IUserRepository

	) {}
    findAll(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    async save(_product: User): Promise<any> {
		const queryRunner = await (await DBConnection.getConnection()).createQueryRunner();
    }
}
