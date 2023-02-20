const connection = require('./connection');

const insertProductSale = async ({ id, sales }) => {
  sales.forEach((sale) => {
        connection.execute(
            'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
            [id, sale.productId, sale.quantity],
        );
    });

    return sales;
};

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) VALUE (NOW())',
  );

  return insertId;
};

module.exports = {
  insertProductSale,
  insertSale,
};