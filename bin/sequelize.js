/* eslint-disable no-console */
const db = require('../models');

module.exports = async function assertDatabaseConnectionOk() {
  console.log('Checking database connection...');
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    console.log('Database connection OK!');
  } catch (error) {
    console.error('Unable to connect to the database:');
    console.error(error.message);
    process.exit(1);
  }
};
