const { readFileSync } = require('fs');
const schema = require('./schema');
const validate = require('../utils/validate');

const config = {
  collections: {
    rollingStock: 'RollingStockDocument',
  },
  server: {
    port: 8000,
  },
};

/**
 * Validate the config with ajv.
 */
const validateConfig = () => {
  if (!validate(schema, config)) {
    process.exit(1);
  }

  console.log('Config is valid');
};

validateConfig();

module.exports = config;
