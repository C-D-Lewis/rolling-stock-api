const { readFileSync } = require('fs');
const validate = require('../utils/validate');

const config = {
  collections: {
    rollingStock: 'RollingStockDocument',
  },
  server: {
    port: 8000,
  },
};

const schema = JSON.parse(readFileSync(`${__dirname}/config.schema.json`, 'utf8'));

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
