const { salesService } = require('../services');
const errorMap = require('../utils/errorMap');

const registerSales = async (req, res) => {
  const sales = req.body;
  const newSale = await salesService.createSale(sales);

  if (newSale.type) return res.status(errorMap.mapError(newSale.type)).json(newSale.message);
  res.status(201).json(newSale);
};

module.exports = {
  registerSales,
};