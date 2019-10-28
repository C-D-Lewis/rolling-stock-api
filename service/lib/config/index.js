const schema = require('./schema');
const validate = require('../utils/validate');

const config = {
  server: {
    port: process.env.PORT || 8000,
  },
};

/**
 * Validate the config with ajv.
 */
const validateConfig = () => {
  if (!validate(schema, config)) {
    console.log('Config was invalid!');
    process.exit(1);
  }

  console.log('Config is valid');
};

validateConfig();

module.exports = config;
