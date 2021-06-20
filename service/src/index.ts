import { initApi } from './api';
import { initMongo } from './db/mongo';

/**
 * The main function.
 */
const main = async (): Promise<void> => {
  await initApi();
  await initMongo();
};

main();
