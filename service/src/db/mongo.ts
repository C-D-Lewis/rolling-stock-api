const { MongoClient } = require('mongodb');

import { RailwayStockDocument } from './types';
import config from '../config/config';

/* Connection URL */
const MONGO_URL = 'mongodb://localhost:27017';
/** Default page size */
const PAGE_SIZE = 16;

const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });
let db: any;

/**
 * Initialise connection to MongoDB.
 */
export const initMongo = async (): Promise<void> => {
  await client.connect();
  db = client.db(config.db.name);
  console.log('Connected to MongoDB');
};

/**
 * Deinitialise connection to MongoDB.
 */
export const deinit = async (): Promise<void> => {
  await client.close();
  console.log('Connection to MongoDB closed');
};

/**
 * Insert a document.
 *
 * @param {string} name - Collection name.
 * @param {RailwayStockDocument} doc - Document to insert.
 */
export const insertOne = (name: string, doc: RailwayStockDocument) => db.collection(name).insertOne(doc);

/**
 * Find a single document.
 *
 * @param {string} name - Collection name.
 * @param {Object} filter - Filter to use.
 */
export const find = (name: string, filter: object): RailwayStockDocument[] => db
  .collection(name)
  .find(filter)
  .sort({ createdAt: -1 })
  .limit(PAGE_SIZE)
  .toArray();

/**
 * Update a document.
 *
 * @param {string} name - Collection name.
 * @param {object} filter - Filter to use, including ObjectID.
 * @param {RailwayStockDocument} doc - Document to insert.
 */
export const replaceOne = (name: string, filter: object, doc: RailwayStockDocument) => db
  .collection(name)
  .replaceOne(filter, doc);

/**
 * Delete a single document.
 *
 * @param {string} name - Collection name.
 * @param {object} filter - Filter to use.
 */
export const deleteOne = (name: string, filter: object) => db.collection(name).deleteOne(filter);
