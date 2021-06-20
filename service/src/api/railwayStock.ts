import { createRailwayStock, findRailwayStock, replaceRailwayStock, deleteRailwayStock, validateRailwayStock } from '../db/railwayStock';
import { Query, Params, MiddlewareHandlerResult } from './types.d';
import { RailwayStockDocument } from '../db/types.d';
import createError from '../utils/createError';

/**
 * Validate and create a RailwayStockDocument.
 *
 * @params {RailwayStockDocument} body - Request body.
 * @returns {Promise<MiddlewareHandlerResult>}
 */
export const handleCreate = async (body: RailwayStockDocument): Promise<MiddlewareHandlerResult> => {
  if (!validateRailwayStock(body)) {
    console.log('Invalid payload');
    return { status: 400, json: createError('Invalid payload') };
  }

  const existing = await findRailwayStock({ unitNumber: body.unitNumber });
  if (existing.length) {
    console.log('Already exists');
    return {
      status: 409,
      json: createError('Railway stock with this unitNumber already exists.'),
    };
  }

  return { status: 201, json: await createRailwayStock(body) };
};

/**
 * List all RailwayStockDocument.
 *
 * TODO: Pagination?
 *
 * @params {RailwayStockDocument} body - Request body.
 * @params {Params} params - Request params.
 * @params {Query} query - Request query string.
 * @returns {Promise<MiddlewareHandlerResult>}
 */
export const handleList = async (
  body: RailwayStockDocument,
  params: object,
  query: Query
): Promise<MiddlewareHandlerResult> => {
  // Plain list operation
  if (!query.q) return { status: 200, json: await findRailwayStock({}) };

  // Unit number, or class
  const found = await findRailwayStock({
    $or: [
      { unitNumber: query.q },
      { class: query.q },
      { type: query.q },
      { manufacturer: query.q },
    ],
  });
  return { status: 200, json: found };
};

/**
 * Read a RailwayStockDocument by 'id'.
 *
 * @params {RailwayStockDocument} body - Request body.
 * @params {Params} params - Request params.
 * @returns {Promise<MiddlewareHandlerResult>}
 */
export const handleRead = async (body: RailwayStockDocument, params: Params): Promise<MiddlewareHandlerResult> => {
  const { railwayStockId } = params;
  if (!railwayStockId) {
    console.log('No railwayStockId specified!');
    return { status: 400, json: createError('No ID specified') };
  }

  // Check it exists
  const [existing] = await findRailwayStock({ id: railwayStockId });
  if (!existing) {
    console.log('Not found');
    return { status: 404, json: createError('Not found') };
  }

  return { status: 200, json: existing };
};

/**
 * Completely update a RailwayStockDocument by 'id'.
 *
 * @params {RailwayStockDocument} body - Request body.
 * @params {Params} params - Request params.
 * @returns {Promise<MiddlewareHandlerResult>}
 */
export const handleReplace = async (body: RailwayStockDocument, params: Params): Promise<MiddlewareHandlerResult> => {
  const { railwayStockId } = params;
  if (!railwayStockId) {
    console.log('No railwayStockId specified!');
    return { status: 400, json: createError('No ID specified') };
  }

  // Validate the payload
  if (!validateRailwayStock(body)) {
    console.log('Invalid payload');
    return { status: 400, json: createError('Invalid payload') };
  }

  // Check it exists
  const [existing] = await findRailwayStock({ id: railwayStockId });
  if (!existing) {
    console.log('Not found');
    return { status: 404, json: createError('Not found') };
  }

  return { status: 200, json: await replaceRailwayStock(existing, body) };
};

/**
 * Delete a RailwayStockDocument by 'id'.
 *
 * @params {RailwayStockDocument} body - Request body.
 * @params {Params} params - Request params.
 * @returns {Promise<MiddlewareHandlerResult>}
 */
export const handleDelete = async (body: RailwayStockDocument, params: Params): Promise<MiddlewareHandlerResult> => {
  const { railwayStockId } = params;
  if (!railwayStockId) {
    console.log('No railwayStockId specified!');
    return { status: 400, json: createError('No ID specified') };
  }

  // Check it exists
  const [existing] = await findRailwayStock({ id: railwayStockId });
  if (!existing) {
    console.log('Not found');
    return { status: 404, json: createError('Not found') };
  }

  await deleteRailwayStock(railwayStockId);
  return { status: 200 };
};
