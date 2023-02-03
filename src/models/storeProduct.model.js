const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");
const Store = require("./store.model");
const Product = require("./product.model");

const StoreProduct = sequelize.define('store_product', {
  storeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Store,
      key: 'id'
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id'
    }
  }
}, {
  timestamps: true,
});

module.exports = StoreProduct;
