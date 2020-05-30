const { omit } = require('lodash');
const { ObjectID } = require('mongodb');
const chance = require('chance').Chance();
const {
  insertOne,
  find,
  replaceOne,
  deleteOne,
} = require('./mongo');
const schema = require('../schemas/RollingStockDocument.schema.json');
const validate = require('../utils/validate');

/** Name of the rolling stock DB collection */
const COLLECTION_NAME = 'RollingStockDocument';

/**
 * Validate a RollingStockDocument.
 *
 * @param {Object} body - Request payload.
 * @returns {boolean} true if the document is a valid RollingStockDocument.
 */
exports.validateRollingStock = body => validate(schema, body);

/**
 * Create a document in the DB.
 *
 * @param {Object} body - Request payload.
 * @returns {Object} Resulting resource.
 */
exports.createRollingStock = async (body) => {
  const now = Date.now();
  const newDoc = {
    ...body,
    id: chance.guid({ version: 4 }),
    createdAt: now,
    updatedAt: now,
  };

  const res = await insertOne(COLLECTION_NAME, newDoc);
  return omit(res.ops[0], ['_id']);
};

/**
 * Find documents from the DB using a filter.
 *
 * @param {Object} filter - Request payload.
 * @returns {Object} Resulting resources.
 */
exports.findRollingStock = async (filter) => {
  const res = await find(COLLECTION_NAME, filter);
  return res ? res.map((p) => omit(p, ['_id'])) : null;
};

/**
 * Replace a document with a new version.
 *
 * @param {Object} existing - The existing user document.
 * @param {Object} body - Request body containing the new version.
 */
exports.replaceRollingStock = async (existing, body) => {
  const filter = { id: existing.id };
  const [found] = await find(COLLECTION_NAME, filter);
  const newDoc = {
    ...body,
    updatedAt: Date.now(),

    // Preserve some fields
    id: found.id,
    createdAt: found.createdAt,
  };

  await replaceOne(COLLECTION_NAME, {
    /* eslint no-underscore-dangle: 0 */
    _id: ObjectID(found._id),
  }, newDoc);
  return newDoc;
};

/**
 * Delete a document from the DB by 'id'.
 *
 * @param {string} id - ID to delete by.
 * @returns {Promise}
 */
exports.deleteRollingStock = async id => deleteOne(COLLECTION_NAME, { id });
