require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "sodaus",
    database: "cocoding",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.MYSQL_PW,
    database: "cocoding",
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.MYSQL_PW,
    database: "cocoding",
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    logging: false,
  },
};
