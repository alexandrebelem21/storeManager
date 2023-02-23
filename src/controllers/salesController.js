const { salesService } = require('../services');
const errorMap = require('../utils/errorMap');

const registerSales = async (req, res) => {
  const sales = req.body;
  const newSale = await salesService.createSale(sales);

  if (newSale.type) return res.status(errorMap.mapError(newSale.type)).json(newSale.message);
  res.status(201).json(newSale);
};

const listSales = async (_req, res) => {
  const { message } = await salesService.allSales();

  // if (newSale.type) return res.status(errorMap.mapError(newSale.type)).json(newSale.message);
  res.status(200).json(message);
};

const getSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.idSale(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  
  res.status(200).json(message);
};

const deleteSale = async (req, res) => {
  // const { name } = req.body;
  const { id } = req.params;

  const { type, message } = await salesService.deleteSale(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(204).json(message);
};

module.exports = {
  registerSales,
  listSales,
  getSale,
  deleteSale,
};