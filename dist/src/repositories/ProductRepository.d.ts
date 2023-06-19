import { Product } from '@/entity';
import { IProductRepository } from './interfaces';
import { QueryRunner } from 'typeorm';
export declare class ProductRepository implements IProductRepository {
    save(product: Product, queryRunner?: QueryRunner): Promise<Product>;
    findAll(queryRunner?: QueryRunner): Promise<Product[]>;
    private _getProductRepository;
}
