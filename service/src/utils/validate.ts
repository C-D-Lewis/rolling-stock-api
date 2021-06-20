const Ajv = require('ajv');

const ajv = new Ajv();

/**
 * Validate the data with ajv.
 *
 * TODO: Return list of errors for further processing.
 *
 * @param {object} schema - Schema object.
 * @param {object} data - Data object to validate against the schema.
 * @returns {boolean} true if the data validates against the schema, false otherwise.
 */
const validate = (schema: object, data: object): boolean => {
  const valid = ajv.validate(schema, data);
  if (!valid) {
    console.log(ajv.errors);
  }

  return valid;
};

export default validate;
