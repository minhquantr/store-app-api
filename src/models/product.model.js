const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Product = sequelize.define("product", {
  productCode: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DOUBLE,
  },
  toppings: {
    type: DataTypes.STRING,
  },
  isTrending: {
    type: DataTypes.BOOLEAN,
  },
},{
  timestamps: true,
});

module.exports = Product;

