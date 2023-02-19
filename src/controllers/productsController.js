const { productsService } = require('../services');
const errorMap = require('../utils/errorMap');

const listProducts = async (_req, res) => {
  const { message } = await productsService.allProcucts();

  // if (type) return res.status(errorMap.mapError(type)).json(message);
  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.idProcuct(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  
  res.status(200).json(message);
};

module.exports = {
  listProducts,
  getProduct,
};