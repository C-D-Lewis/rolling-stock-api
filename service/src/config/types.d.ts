export interface Config {
  server: {
    port: number;
  };
  db: {
    name: string;
    collectionName: string;
  };
}
