import { Container } from 'inversify';
import * as Services from '@/services';
import { REPOSITORY_TYPES, IProductRepository, ProductRepository, UserRepository, IUserRepository } from '@/repositories';

const iocContainer = new Container();

iocContainer.bind<Services.IHealthService>(Services.SERVICE_TYPES.IHealthService).to(Services.HealthService).inSingletonScope();
// iocContainer.bind<Services.ISesService>(Services.SERVICE_TYPES.ISesService).to(Services.SesService).inSingletonScope();
// iocContainer.bind<Services.IS3Service>(Services.SERVICE_TYPES.IS3Service).to(Services.S3Service).inSingletonScope();

iocContainer.bind<Services.IUserService>(Services.SERVICE_TYPES.IUserService).to(Services.UserService).inSingletonScope();
iocContainer.bind<Services.IProductService>(Services.SERVICE_TYPES.IProductService).to(Services.ProductService).inSingletonScope();

iocContainer
	.bind<IProductRepository>(REPOSITORY_TYPES.IProductRepository)
	.to(ProductRepository)
	.inSingletonScope();

iocContainer 
.bind<IUserRepository>(REPOSITORY_TYPES.IUserRepository)
.to(UserRepository) 
.inSingletonScope();

export { iocContainer };
