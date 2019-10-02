const { insert } = require('./index');
const { readFileSync } = require('fs');
const { rollingStock } = require('../config').collections;
const schema = require('../schemas/RollingStockDocument.schema.json');
const validate = require('../utils/validate');

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
