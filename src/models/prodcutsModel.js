const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  
  return result; 
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );

  return result; 
};

const insert = async (productName) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [productName],
  );

  return insertId;
};

const findById2 = async (productId) => {
  const [result] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );

  return result; 
};

const updateProduct = async (name, id) => {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [name, id],
   );
  return { id, name };
};

const deleteProduct = async (id) => {
  await connection.execute(
    'DELETE FROM products WHERE id = ?',
    [id],
  );
  console.log('cntrt');
  console.log(id);
  return { id };
};

module.exports = {
  findAll,
  findById,
  findById2,
  insert,
  updateProduct,
  deleteProduct,
};