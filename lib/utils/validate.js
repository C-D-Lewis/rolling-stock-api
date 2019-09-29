const Ajv = require('ajv');

const ajv = new Ajv();

/**
 * Validate the data with ajv.
 */
const validate = (schema, data) => {
  const valid = ajv.validate(schema, data);
  if (!valid) {
    console.log(ajv.errors);
  }

  return valid;
};

module.exports = validate;
