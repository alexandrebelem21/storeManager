const { productsModel } = require('../models');

const validateProductId = (req, res, next) => {
  const { body } = req;
  const productId = body.some((product) => !product.productId);

  if (productId) return res.status(400).json({ message: '"productId" is required' });

  return next();
};

const validateQuantity = (req, res, next) => {
  const { body } = req;
  const quantityMin = body.some((product) => product.quantity <= 0);
  const quantity = body.some((product) => !product.quantity);

  if (quantityMin) {
    return res.status(422).json({
    message: '"quantity" must be greater than or equal to 1',
  }); 
}

  if (quantity) return res.status(400).json({ message: '"quantity" is required' });

  return next();
};

const validateReq = async (req, res, next) => {
  const sales = req.body;
  const newSales = await Promise
    .all(sales
    .map(async (product) => productsModel
    .findById(product.productId)));
  const hasSale = newSales.every((product) => product);
  // Vai verificar se todas vendas tem o campo productId

  if (!hasSale) return res.status(404).json({ message: 'Product not found' });

  return next();
};

module.exports = {
  validateProductId,
  validateQuantity,
  validateReq,
};