const { Store, Product, StoreProduct } = require('./models');

const setAssociations = function() {
    Store.belongsToMany(Product, { through: StoreProduct });
    Product.belongsToMany(Store, { through: StoreProduct });
}

module.exports = setAssociations;