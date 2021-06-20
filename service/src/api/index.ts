import express from 'express';
import { handleCreate, handleList, handleRead, handleReplace, handleDelete } from './railwayStock';
import middleware from './middleware';
import config from '../config/config';

/**
 * Middleware to enable browser pre-flight requests.
 *
 * @param {object} req - Request object.
 * @param {object} res - Response object.
 * @param {function} next - Callback for next middleware.
 */
const enablePreflight = (req: any, res: any, next: Function) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};

/**
 * Initialise the API.
 */
export const initApi = async () => {
  const server = express();

  server.use(express.json());
  server.use(enablePreflight);
  server.get('/healthcheck', (req: any, res: any) => res.status(200).json({ ping: 'pong' }));

  server.post('/railwayStock', middleware(handleCreate));
  server.get('/railwayStock', middleware(handleList));
  server.get('/railwayStock/:railwayStockId', middleware(handleRead));
  server.put('/railwayStock/:railwayStockId', middleware(handleReplace));
  server.delete('/railwayStock/:railwayStockId', middleware(handleDelete));

  server.listen(config.server.port, () => console.log(`Server started on ${config.server.port}`));
};
