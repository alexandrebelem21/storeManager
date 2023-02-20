const { salesModel } = require('../models');

const createSale = async (sales) => {
  const id = await salesModel.insertSale();
  const newProductSale = await salesModel.insertProductSale({ id, sales });

  return { id, itemsSold: newProductSale };
};

module.exports = {
  createSale,
};