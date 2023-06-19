import { User } from '@/entity';
import { IUserRepository } from '@/repositories';
import { IUserService } from './interfaces';
export declare class UserService implements IUserService {
    private readonly _usersRepository;
    constructor(_usersRepository: IUserRepository);
    findAll(): Promise<any>;
    save(_product: User): Promise<any>;
}
