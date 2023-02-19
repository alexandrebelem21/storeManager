const { productsModel } = require('../models');

const allProcucts = async () => {
  const products = await productsModel.findAll();

  return { type: null, message: products };
};

const idProcuct = async (productId) => {
  const product = await productsModel.findById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = {
  allProcucts,
  idProcuct,
};