"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iocContainer = void 0;
const inversify_1 = require("inversify");
const Services = __importStar(require("@/services"));
const repositories_1 = require("@/repositories");
const iocContainer = new inversify_1.Container();
exports.iocContainer = iocContainer;
iocContainer.bind(Services.SERVICE_TYPES.IHealthService).to(Services.HealthService).inSingletonScope();
iocContainer.bind(Services.SERVICE_TYPES.IUserService).to(Services.UserService).inSingletonScope();
iocContainer.bind(Services.SERVICE_TYPES.IProductService).to(Services.ProductService).inSingletonScope();
iocContainer
    .bind(repositories_1.REPOSITORY_TYPES.IProductRepository)
    .to(repositories_1.ProductRepository)
    .inSingletonScope();
iocContainer
    .bind(repositories_1.REPOSITORY_TYPES.IUserRepository)
    .to(repositories_1.UserRepository)
    .inSingletonScope();
//# sourceMappingURL=inversify.config.js.map