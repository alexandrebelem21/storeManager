const allProductsDB = [
  {
    id: 1,
    name: 'Martelo de Thor'
  },
  {
    id: 2,
    name: 'Traje de encolhimento'
  },
  {
    id: 3,
    name: 'Escudo do Capitão América'
  },
];

const productIdDB = [
  {
  id: 2,
  name: 'Traje de encolhimento'
  }
];

const insertProductDB = {
  id: 6,
  name: 'Arco do arrow'
};

const updateProductDB = {
  id: 2,
  name: 'Arco do arrow'
};

const allSalesDB = [
  {
    "saleId": 1,
    "date": "2023-02-23T00:37:56.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2023-02-23T00:37:56.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2023-02-23T00:37:56.000Z",
    "productId": 3,
    "quantity": 15
  }
];

const saleDB = [
  {
    "productId": 1,
    "quantity": 1,
  },
  {
    "productId": 2,
    "quantity": 5,
  },
];

module.exports = {
  allProductsDB,
  productIdDB,
  insertProductDB,
  updateProductDB,
  allSalesDB,
  saleDB,
};