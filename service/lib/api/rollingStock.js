const {
  createRollingStock,
  findRollingStock,
  replaceRollingStock,
  deleteRollingStock,
  validateRollingStock,
} = require('../db/rollingStock');
const createError = require('../utils/createError');

/**
 * Validate and create a RollingStockDocument.
 *
 * @params {Object} body - Request body.
 * @returns {Promise<{ status, json }>}
 */
exports.handleCreate = async (body) => {
  if (!validateRollingStock(body)) {
    console.log('Invalid payload');
    return { status: 400, json: createError('Invalid payload') };
  }

  const existing = await findRollingStock({ unitNumber: body.unitNumber });
  if (existing.length) {
    console.log('Already exists');
    return { status: 409, json: createError('Rolling stock with this unitNumber already exists.') };
  }

  return { status: 201, json: await createRollingStock(body) };
};

/**
 * List all RollingStockDocument.
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
    const found = await findRollingStock({
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
  return { status: 200, json: await findRollingStock({}) };
};

/**
 * Read a RollingStockDocument by 'id'.
 *
 * @params {Object} body - Request body.
 * @params {Object} params - Request params.
 * @returns {Promise<{ status, json }>}
 */
exports.handleRead = async (body, params) => {
  const { rollingStockId } = params;
  if (!rollingStockId) {
    console.log('No rollingStockId specified!');
    return { status: 400, json: createError('No ID specified') };
  }

  // Check it exists
  const [existing] = await findRollingStock({ id: rollingStockId });
  if (!existing) {
    console.log('Not found');
    return { status: 404, json: createError('Not found') };
  }

  return { status: 200, json: existing };
};

/**
 * Completely update a RollingStockDocument by 'id'.
 *
 * @params {Object} body - Request body.
 * @params {Object} params - Request params.
 * @returns {Promise<{ status, json }>}
 */
exports.handleReplace = async (body, params) => {
  const { rollingStockId } = params;
  if (!rollingStockId) {
    console.log('No rollingStockId specified!');
    return { status: 400, json: createError('No ID specified') };
  }

  // Validate the payload
  if (!validateRollingStock(body)) {
    console.log('Invalid payload');
    return { status: 400, json: createError('Invalid payload') };
  }

  // Check it exists
  const [existing] = await findRollingStock({ id: rollingStockId });
  if (!existing) {
    console.log('Not found');
    return { status: 404, json: createError('Not found') };
  }

  return { status: 200, json: await replaceRollingStock(existing, body) };
};

/**
 * Delete a RollingStockDocument by 'id'.
 *
 * @params {Object} body - Request body.
 * @params {Object} params - Request params.
 * @returns {Promise<{ status, json }>}
 */
exports.handleDelete = async (body, params) => {
  const { rollingStockId } = params;
  if (!rollingStockId) {
    console.log('No rollingStockId specified!');
    return { status: 400, json: createError('No ID specified') };
  }

  // Check it exists
  const [existing] = await findRollingStock({ id: rollingStockId });
  if (!existing) {
    console.log('Not found');
    return { status: 404, json: createError('Not found') };
  }

  await deleteRollingStock(rollingStockId);
  return { status: 200 };
};
