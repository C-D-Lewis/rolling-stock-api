const { MongoClient } = require('mongodb');

/* Connection URL */
const MONGO_URL = 'mongodb://localhost:27017';
/* Database Name */
const DB_NAME = 'LineManager';

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
 * Insert a document.
 *
 * @param {string} name - Collection name.
 * @param {Object} doc - Document to insert.
 */
exports.insert = (name, doc) => db.collection(name).insertOne(doc);

/**
 * Find a single document.
 *
 * @param {string} name - Collection name.
 * @param {Object} filter - Filter to use.
 */
exports.find = (name, filter) => db.collection(name).find(filter).toArray();

/**
 * Delete a single document.
 *
 * @param {string} name - Collection name.
 * @param {Object} filter - Filter to use.
 */
exports.deleteOne = (name, filter) => db.collection(name).deleteOne(filter);

process.on('exit', client.close);
