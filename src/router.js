const express = require('express');
const router = express.Router();

const { storeRouter } = require("./routes");

router.use('/stores', storeRouter);

module.exports = router;