const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Store = sequelize.define("store", {
  name: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
});

module.exports = Store;

