const api = require('./api');
const db = require('./db');

const main = async () => {
  await api.init();
  await db.init();
};

main();
