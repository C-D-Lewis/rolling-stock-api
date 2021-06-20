const {
  createRailwayStock,
  findRailwayStock,
  replaceRailwayStock,
  deleteRailwayStock,
  validateRailwayStock,
} = require('../db/railwayStock');
const createError = require('../utils/createError');

/**
 * Validate and create a RailwayStockDocument.
 *
 * @params {Object} body - Request body.
 * @returns {Promise<{ status, json }>}
 */
exports.handleCreate = async (body) => {
  if (!validateRailwayStock(body)) {
    console.log('Invalid payload');
    return { status: 400, json: createError('Invalid payload') };
  }

  const existing = await findRailwayStock({ unitNumber: body.unitNumber });
  if (existing.length) {
    console.log('Already exists');
    return { status: 409, json: createError('Railway stock with this unitNumber already exists.') };
  }

  return { status: 201, json: await createRailwayStock(body) };
};

/**
 * List all RailwayStockDocument.
 *
 * TODO: Pagination?
 *
 * @params {Object} body - Request body.
 * @params {Object} params - Request params.
 * @params {Object} queryString - Request query string.
 * @returns {Promise<{ status, json }>}
 */
exports.handleList = async (body, params, queryString) => {
  if (queryString.q && queryString.q.length > 0) {
    // Unit number, or class
    const found = await findRailwayStock({
      $or: [
        { unitNumber: queryString.q },
        { class: queryString.q },
        { type: queryString.q },
        { manufacturer: queryString.q },
      ],
    });
    return { status: 200, json: found };
  }

  // Plain list operation
  return { status: 200, json: await findRailwayStock({}) };
};

/**
 * Read a RailwayStockDocument by 'id'.
 *
 * @params {Object} body - Request body.
 * @params {Object} params - Request params.
 * @returns {Promise<{ status, json }>}
 */
exports.handleRead = async (body, params) => {
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
 * @params {Object} body - Request body.
 * @params {Object} params - Request params.
 * @returns {Promise<{ status, json }>}
 */
exports.handleReplace = async (body, params) => {
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
 * @params {Object} body - Request body.
 * @params {Object} params - Request params.
 * @returns {Promise<{ status, json }>}
 */
exports.handleDelete = async (body, params) => {
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
