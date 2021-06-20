import {
  ExpressRequest,
  ExpressResult,
  MiddlewareHandler,
} from './types';
import createError from '../utils/createError';

/**
 * Function to allow handlers to return response objects, and handle errors.
 *
 * @param {Function} handler - API handler function.
 * @returns {Function} Function provided to express.
 */
const middleware = (handler: MiddlewareHandler) => async (req: ExpressRequest, res: ExpressResult) => {
  const { method, body, params, query, url } = req;
  console.log(`${method} ${url} ${JSON.stringify(body)}`);

  try {
    const { status, json } = await handler(body, params, query);
    return json ? res.status(status).json(json) : res.status(status).send();
  } catch (e) {
    console.log(e);
    return res.status(500).json(createError('Server error'));
  }
};

export default middleware;
