const express = require('express');
const { storeController } = require('../controllers');

const router = express.Router();

router
  .route('/')
  .get(storeController.getStores);

router
  .route('/:storeId')
  .get(storeController.getStoreProducts);

module.exports = router;