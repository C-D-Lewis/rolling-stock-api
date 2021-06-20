import { Config } from './types.d';

const config: Config = {
  server: {
    port: 8000,
  },
  db: {
    name: 'RailwayStockService',
    collectionName: 'RailwayStockDocument',
  },
};

export default config;
