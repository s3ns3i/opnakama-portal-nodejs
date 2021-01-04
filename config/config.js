const result = require('dotenv').config();

if (result.error) {
  throw result.error;
}

module.exports = {
  development: {
    username: process.env.FORUM_DB_USERNAME,
    password: process.env.FORUM_DB_PASSWORD,
    database: process.env.FORUM_DB_DATABASE,
    host: process.env.FORUM_DB_HOST,
    dialect: process.env.FORUM_DB_DIALECT,
    app_port: 3002,
  },
  test: {
    username: process.env.FORUM_DB_USERNAME,
    password: process.env.FORUM_DB_PASSWORD,
    database: process.env.FORUM_DB_DATABASE,
    host: process.env.FORUM_DB_HOST,
    dialect: process.env.FORUM_DB_DIALECT,
    app_port: 3002,
  },
  production: {
    username: process.env.FORUM_DB_USERNAME,
    password: process.env.FORUM_DB_PASSWORD,
    database: process.env.FORUM_DB_DATABASE,
    host: process.env.FORUM_DB_HOST,
    dialect: process.env.FORUM_DB_DIALECT,
    app_port: process.env.PORT,
    ssl_key: process.env.SSL_KEY,
    ssl_key_path: process.env.SSL_KEY_PATH,
    ssl_cert: process.env.SSL_CERT,
    ssl_cert_path: process.env.SSL_CERT_PATH,
  },
};
