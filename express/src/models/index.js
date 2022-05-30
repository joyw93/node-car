const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/sequelize/mysql')[env];
const User = require('./user');
const Car = require('./car');


const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.User = User;
db.Car = Car;

User.init(sequelize);
Car.init(sequelize);
User.associate(db);
Car.associate(db);

module.exports = db;