// src/config/config.js

require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...config,
    database: 'orm_trybe_dev',
  },
  test: {
    ...config,
    database: 'orm_trybe_test',
    logging: false,
  },
  production: {
    ...config,
    database: 'orm_trybe',
  },
};