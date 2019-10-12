const { readFileSync } = require('fs');
const { omit } = require('lodash');
const { ObjectID } = require('mongodb');
const chance = require('chance').Chance();
const { insertOne, find, replaceOne, deleteOne } = require('./index');
const schema = require('../schemas/RollingStockDocument.schema.json');
const validate = require('../utils/validate');

const COLLECTION_NAME = 'RollingStockDocument';

/**
 * Validate a RollingStockDocument.
 *
 * @param {Object} body - Request payload.
 * @returns {boolean} true if the document is a valid RollingStockDocument.
 */
exports.validate = (body) => validate(schema, body);

/**
 * Create a document in the DB.
 *
 * @param {Object} body - Request payload.
 * @returns {Object} Resulting resource.
 */
exports.create = async (body) => {
  const now = Date.now();
  const id = chance.string({ length: 32, alpha: true, numeric: true });
  const doc = {
    ...body,
    id,
    createdAt: now,
    updatedAt: now,
  };

  const res = await insertOne(COLLECTION_NAME, doc);
  return omit(res.ops[0], ['_id']);
};

/**
 * Find documents from the DB using a filter.
 *
 * @param {Object} filter - Request payload.
 * @returns {Object} Resulting resources.
 */
exports.find = async (filter) => {
  const res = await find(COLLECTION_NAME, filter);
  return res ? res.map(p => omit(p, ['_id'])) : null;
};

/**
 * Replace a document with a new version.
 *
 * @param {Object} existing - The existing user document.
 * @param {Object} body - Request body containing the new version.
 */
exports.replace = async (existing, body) => {
  const filter = { id: existing.id };
  const doc = await find(COLLECTION_NAME, filter);
  return replaceOne(COLLECTION_NAME, { _id: ObjectID(doc._id) }, body);
};

/**
 * Delete a document from the DB by 'id'.
 *
 * @param {string} id - ID to delete by.
 * @returns {Promise}
 */
exports.del = async (id) => {
  await deleteOne(COLLECTION_NAME, { id });
};
