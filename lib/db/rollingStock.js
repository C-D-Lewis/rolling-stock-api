const { readFileSync } = require('fs');
const { insert } = require('./index');
const { rollingStock } = require('../config').collections;
const validate = require('../utils/validate');

const schema = JSON.parse(
  readFileSync(`${__dirname}/../schemas/RollingStockDocument.schema.json`, 'utf8'),
);

/**
 * Validate a RollingStockDocument.
 *
 * @param {object} body - Request payload.
 * @returns {boolean} true if the document is a valid RollingStockDocument.
 */
exports.validate = (body) => validate(schema, body);

/**
 * Create a document in the DB.
 *
 * @param {object} body - Request payload.
 * @returns {object} Resulting document.
 */
exports.create = (body) => {
  const now = Date.now();
  const doc = {
    ...body,
    id: `${now}`,
    updatedAt: now,
  };

  return insert(rollingStock, doc);
};
