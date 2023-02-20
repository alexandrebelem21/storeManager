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

const updateProduct = async (name, id) => {
   const findProduct = await productsModel.findById(id);
  if (!findProduct) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  const product = await productsModel.updateProduct(name, id);
  return { type: null, message: product };
};

const deleteProduct = async (id) => {
   const findProduct = await productsModel.findById(id);
  if (!findProduct) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  // if (findProduct.type !== null) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
console.log('servc');
  await productsModel.deleteProduct(id);
  return { type: null, message: '' };
};

module.exports = {
  allProducts,
  idProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};