import { iocContainer } from '@/configs/inversify.config';
import e, { Express, NextFunction, Request, Response } from 'express';
import { COMMON_PATH_NOT_FOUND, PATH_PREFIX } from '@/constants';
import { IProductRepository, REPOSITORY_TYPES } from '@/repositories';

export const setUpProductController = function (app: Express) {
	app.get(`${PATH_PREFIX}`, getProducts, );
	app.post(`${PATH_PREFIX}`, saveProducts);
}


const getProducts = async (_req: Request, res: Response) => {
    const productRepository = iocContainer.get<IProductRepository>(REPOSITORY_TYPES.IProductRepository);
	const products =  await productRepository.findAll()
	res.send(products)
};

const saveProducts = async (req: Request, res: Response) => {
    const productRepository = iocContainer.get<IProductRepository>(REPOSITORY_TYPES.IProductRepository);
	const product = req.body 
	productRepository.save(product)
	res.send(product);
};
