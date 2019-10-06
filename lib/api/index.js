const express = require('express');
const { port } = require('../config').server;
const createRollingStock = require('./createRollingStock');
const readRollingStock = require('./readRollingStock');

exports.init = async () => {
  const server = express();
  server.use(express.json());
  server.get('/healthcheck', (req, res) => res.status(200).json({ ping: 'pong' }));

  server.post('/rollingStock', createRollingStock);
  server.get('/rollingStock/:rollingStockId', readRollingStock);

  server.listen(port, () => console.log('Server started'));
};
