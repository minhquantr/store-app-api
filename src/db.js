const MYSQL = require("./config.js").mysql;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  MYSQL.database, 
  MYSQL.username,
  MYSQL.password, 
  {
    host: MYSQL.host,
    dialect: MYSQL.dialect,
  }
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("[ Database ] Connected");
  } catch (e) {
    console.log("[ Database ] Failed to connect : ", e);
  }
}

module.exports = { sequelize, connect }
