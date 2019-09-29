const express = require('express');
const { port } = require('../config').server;

exports.init = async () => {
  const server = express();
  server.use(express.json());

  server.get('/healthcheck', (req, res) => res.status(200).json({ ping: 'pong' }));

  server.post('/rollingStock', require('./createRollingStock'));

  server.listen(port, () => console.log('Server started'));
};
