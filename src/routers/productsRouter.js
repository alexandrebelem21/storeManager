const express = require('express');
const { productsController } = require('../controllers');
const validateProductName = require('../middlewares/validateProductName');

const productsRouter = express.Router();

productsRouter.get('/', productsController.listProducts);
productsRouter.get('/:id', productsController.getProduct);
productsRouter.post('/', validateProductName, productsController.createProduct);

module.exports = productsRouter;