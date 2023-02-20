// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: process.env.MYSQL_HOST || 'localhost',
//   port: process.env.MYSQL_PORT || 3306,
//   user: 'root',
//   password: 'password',
//   database: 'StoreManager',
// });

// module.exports = connection;

const mysql = require('mysql2/promise');

require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || 'StoreManager',
});

module.exports = connection;