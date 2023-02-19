const express = require('express');
const { productsController } = require('../controllers');

const productsRouter = express.Router();

productsRouter.get('/', productsController.listProducts);
productsRouter.get('/:id', productsController.getProduct);

module.exports = productsRouter;