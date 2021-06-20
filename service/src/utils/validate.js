const Ajv = require('ajv');

const ajv = new Ajv();

/**
 * Validate the data with ajv.
 *
 * TODO: Return list of errors for further processing.
 *
 * @param {Object} schema - Schema object.
 * @param {Object} data - Data object to validate against the schema.
 * @returns {boolean} true if the data validates against the schema, false otherwise.
 */
const validate = (schema, data) => {
  const valid = ajv.validate(schema, data);
  if (!valid) {
    console.log(ajv.errors);
  }

  return valid;
};

module.exports = validate;
