"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpProductController = void 0;
const inversify_config_1 = require("@/configs/inversify.config");
const constants_1 = require("@/constants");
const repositories_1 = require("@/repositories");
const setUpProductController = function (app) {
    app.get(`${constants_1.PATH_PREFIX}`, getProducts);
    app.post(`${constants_1.PATH_PREFIX}`, saveProducts);
};
exports.setUpProductController = setUpProductController;
const getProducts = async (_req, res) => {
    const productRepository = inversify_config_1.iocContainer.get(repositories_1.REPOSITORY_TYPES.IProductRepository);
    const products = await productRepository.findAll();
    console.log(products);
    res.send(products);
};
const saveProducts = async (req, res) => {
    const productRepository = inversify_config_1.iocContainer.get(repositories_1.REPOSITORY_TYPES.IProductRepository);
    const product = req.body;
    productRepository.save(product);
    res.send(product);
};
//# sourceMappingURL=ProductController.js.map