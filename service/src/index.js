const api = require('./api');
const mongo = require('./db/mongo');

/**
 * The main function.
 */
const main = async () => {
  await api.init();
  await mongo.init();
};

main();
