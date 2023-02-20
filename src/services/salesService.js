const { salesModel } = require('../models');

const createSale = async (sales) => {
  const id = await salesModel.insertSale();
  const newProductSale = await salesModel.insertProductSale({ id, sales });

  return { id, itemsSold: newProductSale };
};

const allSales = async () => {
  const sales = await salesModel.findAllSales();
  return { type: null, message: sales };
};

const idSale = async (saleId) => {
  const sale = await salesModel.findSalesById(saleId);
  if (sale.length === 0) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  
  return { type: null, message: sale };
};

module.exports = {
  createSale,
  allSales,
  idSale,
};