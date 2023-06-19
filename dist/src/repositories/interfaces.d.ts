import { Product } from '@/entity/Product';
import { User } from '@/entity/User';
import { QueryRunner } from 'typeorm';
export interface IProductRepository {
    save(product: Product, queryRunner?: QueryRunner): Promise<Product>;
    findAll(queryRunner?: QueryRunner): Promise<Product[]>;
}
export interface IUserRepository {
    save(user: User, queryRunner?: QueryRunner): Promise<User>;
    findAll(userId: string, queryRunner?: QueryRunner): Promise<User | undefined>;
}
