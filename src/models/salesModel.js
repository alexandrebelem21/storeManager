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

const deleteSale = async (id) => {
  await connection.execute(
    'DELETE FROM sales WHERE id = ?',
    [id],
  );
  return { id };
};

const updateSale = async (saleId, productId, quantity) => {
  await connection.execute(
    'UPDATE sales_products SET quantity = ? WHERE sale_id = ? AND product_Id = ?',
    [quantity, saleId, productId],
  );
  
 const [updatedSale] = await connection.execute(
    'SELECT * FROM sales_products WHERE sale_id = ?',
    [saleId],
  );

  return updatedSale;
};

module.exports = {
  insertProductSale,
  insertSale,
  findAllSales,
  findSalesById,
  deleteSale,
  updateSale,
};