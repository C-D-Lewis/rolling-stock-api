const express = require('express');
const { port } = require('../config').server;
const {
  create: createRollingStock,
  list: listRollingStock,
  read: readRollingStock,
  replace: replaceRollingStock,
  del: deleteRollingStock,
} = require('./rollingStock');
const middleware = require('./middleware');

/**
 * Middleware to enable browser pre-flight requests.
 *
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 * @param {function} next - Callback for next middleware.
 */
const enablePreflight = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};

exports.init = async () => {
  const server = express();

  server.use(express.json());
  server.use(enablePreflight);
  server.get('/healthcheck', (req, res) => res.status(200).json({ ping: 'pong' }));

  server.post('/rollingStock', middleware(createRollingStock));
  server.get('/rollingStock', middleware(listRollingStock));
  server.get('/rollingStock/:rollingStockId', middleware(readRollingStock));
  server.put('/rollingStock/:rollingStockId', middleware(replaceRollingStock));
  server.delete('/rollingStock/:rollingStockId', middleware(deleteRollingStock));

  server.listen(port, () => console.log(`Server started on ${port}`));
};
