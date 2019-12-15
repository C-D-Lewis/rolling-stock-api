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

exports.init = async () => {
  const server = express();

  server.use(express.json());
  server.get('/healthcheck', (req, res) => res.status(200).json({ ping: 'pong' }));

  server.post('/rollingStock', middleware(createRollingStock));
  server.get('/rollingStock', middleware(listRollingStock));
  server.get('/rollingStock/:rollingStockId', middleware(readRollingStock));
  server.put('/rollingStock/:rollingStockId', middleware(replaceRollingStock));
  server.delete('/rollingStock/:rollingStockId', middleware(deleteRollingStock));

  server.listen(port, () => console.log(`Server started on ${port}`));
};
