import { User } from '@/entity';
import { IUserRepository } from './interfaces';
import { QueryRunner } from 'typeorm';
export declare class UserRepository implements IUserRepository {
    save(user: User, queryRunner?: QueryRunner): Promise<User>;
    findAll(_userId: string, _queryRunner?: QueryRunner): Promise<User | undefined>;
    private _getUserRepository;
}
