const { readFileSync } = require('fs');
const { omit } = require('lodash');
const { insert, findOne } = require('./index');
const schema = require('../schemas/RollingStockDocument.schema.json');
const validate = require('../utils/validate');

const COLLECTION_NAME = 'RollingStockDocument';

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
exports.create = async (body) => {
  const now = Date.now();
  const doc = {
    ...body,
    id: `${now}`,
    createdAt: now,
    updatedAt: now,
  };

  const res = await insert(COLLECTION_NAME, doc);
  return omit(res.ops[0], ['_id']);
};

/**
 * Read a document from the DB.
 *
 * @param {object} body - Request payload.
 * @returns {object} Resulting document.
 */
exports.read = async (id) => {
  const res = await findOne(COLLECTION_NAME, id);
  return omit(res, ['_id']);
};
