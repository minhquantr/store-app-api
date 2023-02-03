const express = require('express')
const cors = require('cors');

const Database = require('./src/db')
const Associations = require('./src/associations')();

const app = express()
const port = 3000

// Routers
const router = require("./src/router");

app.use(express.json());
app.use(cors());

app.use('/', router);

async function init() {
	await Database.connect();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

init();
