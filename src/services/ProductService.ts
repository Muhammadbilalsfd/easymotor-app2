import { logger } from '@/common';
import { Product } from '@/entity';
import {
	IProductRepository,
	REPOSITORY_TYPES,
} from '@/repositories';
import DBConnection from '@/repositories/DBConnection';
import { inject, injectable } from 'inversify';
import { IProductService } from './interfaces';
import { SERVICE_TYPES } from './ServiceTypes';

import { QueryRunner } from 'typeorm';
import { ENV } from '@/configs';

@injectable()
export class ProductService implements IProductService {
	constructor(
		@inject(REPOSITORY_TYPES.IProductRepository) private readonly _productRepository: IProductRepository
	) {}
	async save(_product: Product): Promise<any> {
		const queryRunner = await (await DBConnection.getConnection()).createQueryRunner();
    }

	async findAll(): Promise<any> {
		const queryRunner = await (await DBConnection.getConnection()).createQueryRunner();
    }
}
