const { productsModel } = require('../models');

const allProducts = async () => {
  const products = await productsModel.findAll();

  return { type: null, message: products };
};

const idProduct = async (productId) => {
  const product = await productsModel.findById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  
  return { type: null, message: product };
};

const createProduct = async (name) => {
  const newProduct = await productsModel.insert(name);
  const newProductName = await productsModel.findById(newProduct);

  return { type: null, message: newProductName };
};

module.exports = {
  allProducts,
  idProduct,
  createProduct,
};