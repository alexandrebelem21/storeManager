const express = require('express');
const { salesController } = require('../controllers');
const { validateProductId,
  validateQuantity,
  validateReq } = require('../middlewares/validateSales');

const salesRouter = express.Router();

salesRouter.post('/', validateProductId,
  validateQuantity,
  validateReq,
  salesController.registerSales);

salesRouter.get('/', salesController.listSales);
salesRouter.get('/:id', salesController.getSale);

module.exports = salesRouter;