const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;