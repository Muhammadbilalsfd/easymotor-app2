import { injectable } from 'inversify';
import { Product } from '@/entity';
import { IProductRepository } from './interfaces';
import { connectionCheck } from '@/decorators';
import DBConnection from './DBConnection';
import { v4 as uuidv4 } from 'uuid';
import { In, QueryRunner } from 'typeorm';

@injectable()
export class ProductRepository implements IProductRepository {
	@connectionCheck
	async save(product: Product, queryRunner?: QueryRunner): Promise<Product> {
		const now = new Date().toISOString();

		const productRepository = await this._getProductRepository(queryRunner);
		return await productRepository.save(product);
	}
	@connectionCheck
	async findAll(queryRunner?: QueryRunner): Promise<Product[]> {
		const now = new Date().toISOString();
		const productRepository = await this._getProductRepository(queryRunner);
		return await productRepository.find();
	}

	private async _getProductRepository(queryRunner?: QueryRunner) {
		if (queryRunner) {
			return queryRunner.manager.getRepository(Product);
		} else {
			const connection = await DBConnection.getConnection();
			return connection.getRepository(Product);
		}
	}

}











