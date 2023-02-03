const { Store } = require("../models");

exports.getStores = async () => {
  const stores = await Store.findAll();
  return stores;
};

