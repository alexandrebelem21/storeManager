const camelize = require('camelize');

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

const findAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sales_products.sale_id,
    sales.date,
    sales_products.product_id,
    sales_products.quantity 
    FROM sales_products 
    JOIN sales
    ON sales_products.sale_id = sales.id
    ORDER BY sale_id ASC, product_id ASC`,
  );
  return camelize(result); 
};

const findSalesById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT sales.date,
    sales_products.product_id,
    sales_products.quantity 
    FROM sales_products 
    JOIN sales
    ON sales_products.sale_id = sales.id
    WHERE sale_id = ?
    ORDER BY sale_id ASC, product_id ASC`,
    [saleId],
  );
  return camelize(result);  
};

module.exports = {
  insertProductSale,
  insertSale,
  findAllSales,
  findSalesById,
};