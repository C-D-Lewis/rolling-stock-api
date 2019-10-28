const { MongoClient } = require('mongodb');

/* Connection URL */
const MONGO_URL = 'mongodb://localhost:27017';
/* Database Name */
const DB_NAME = 'RollingStockService';

const client = new MongoClient(MONGO_URL);
let db;

/**
 * Initialise connection to MongoDB.
 */
exports.init = async () => {
  await client.connect();
  console.log('Connected to MongoDB');
  db = client.db(DB_NAME);
};

/**
 * Deinitialise connection to MongoDB.
 */
const deinit = async () => {
  await client.close();
  console.log('Connection to MongoDB closed');
};

/**
 * Insert a document.
 *
 * @param {string} name - Collection name.
 * @param {Object} doc - Document to insert.
 */
exports.insertOne = (name, doc) => db.collection(name).insertOne(doc);

/**
 * Find a single document.
 *
 * @param {string} name - Collection name.
 * @param {Object} filter - Filter to use.
 */
exports.find = (name, filter) => db.collection(name).find(filter).toArray();

/**
 * Update a document.
 *
 * @param {string} name - Collection name.
 * @param {Object} filter - Filter to use, including ObjectID.
 * @param {Object} doc - Document to insert.
 */
exports.replaceOne = (name, filter, doc) => db.collection(name).replaceOne(filter, doc);

/**
 * Delete a single document.
 *
 * @param {string} name - Collection name.
 * @param {Object} filter - Filter to use.
 */
exports.deleteOne = (name, filter) => db.collection(name).deleteOne(filter);

process.on('exit', deinit);
