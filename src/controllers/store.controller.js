const { storeService, storeProductService } = require('../services');

exports.getStores = async (req, res) => {
  const result = await storeService.getStores();

  return res.json({
    data: result,
  });
};

exports.getStoreProducts = async (req, res) => {
  const { storeId } = req.params;
  const { sortBy, filterBy } = req.query;
  const options = {sortBy, filterBy};
  const result = await storeProductService.getStoreProducts(storeId, options);
  return res.json({
    data: result,
  });
};