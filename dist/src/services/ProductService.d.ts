import { Product } from '@/entity';
import { IProductRepository } from '@/repositories';
import { IProductService } from './interfaces';
export declare class ProductService implements IProductService {
    private readonly _productRepository;
    constructor(_productRepository: IProductRepository);
    save(_product: Product): Promise<any>;
    findAll(): Promise<any>;
}
