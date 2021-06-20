const chance = require('chance').Chance();

import { omit } from 'lodash';
import { ObjectID } from 'mongodb';
import { insertOne, find, replaceOne, deleteOne } from './mongo';
import { RailwayStockDocument } from './types';
import schema from '../schemas/RailwayStockDocument.schema.json';
import config from '../config/config';
import validate from '../utils/validate';

const {
  db: {
    collectionName,
  },
} = config;

/**
 * Validate a RailwayStockDocument.
 *
 * @param {RailwayStockDocument} body - Request payload to validate.
 * @returns {boolean} true if the document is a valid RailwayStockDocument.
 */
export const validateRailwayStock = (body: RailwayStockDocument): boolean => validate(schema, body);

/**
 * Create a document in the DB.
 *
 * @param {RailwayStockDocument} body - Request payload.
 * @returns {Object} Resulting resource.
 */
export const createRailwayStock = async (body: RailwayStockDocument): Promise<RailwayStockDocument> => {
  const now = Date.now();
  const newDoc = {
    ...body,
    id: chance.guid({ version: 4 }),
    createdAt: now,
    updatedAt: now,
  };

  const res = await insertOne(collectionName, newDoc);
  return <RailwayStockDocument> omit(res.ops[0], ['_id']);
};

/**
 * Find documents from the DB using a filter.
 *
 * @param {object} filter - Request payload.
 * @returns {Promise<Array<RailwayStockDocument>>} Resulting resources.
 */
export const findRailwayStock = async (filter: object): Promise<RailwayStockDocument[]> => {
  const res = await find(collectionName, filter);
  return res ? res.map((p) => <RailwayStockDocument> omit(p, ['_id'])) : [];
};

/**
 * Replace a document with a new version.
 *
 * @param {RailwayStockDocument} existing - The existing user document.
 * @param {RailwayStockDocument} body - Request body containing the new version.
 */
export const replaceRailwayStock = async (
  existing: RailwayStockDocument,
  body: RailwayStockDocument
): Promise<RailwayStockDocument> => {
  const filter = { id: existing.id };
  const [found] = await find(collectionName, filter);
  const newDoc = {
    ...body,
    updatedAt: Date.now(),

    // Preserve some fields
    id: found.id,
    createdAt: found.createdAt,
  };

  await replaceOne(collectionName, {
    _id: new ObjectID(found._id),
  }, newDoc);
  return newDoc;
};

/**
 * Delete a document from the DB by 'id'.
 *
 * @param {string} id - ID to delete by.
 * @returns {Promise}
 */
export const deleteRailwayStock = async (id: string): Promise<void> => deleteOne(collectionName, { id });
