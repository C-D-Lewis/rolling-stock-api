const {
  create,
  find,
  replace,
  del,
  validate,
} = require('../db/rollingStock');
const createError = require('../utils/createError');

/**
 * Validate and create a RollingStockDocument.
 *
 * @params {Object} body - Request body.
 * @returns {Promise<{ status, json }>}
 */
exports.create = async (body) => {
  if (!validate(body)) {
    console.log('Invalid payload');
    return { status: 400, json: createError('Invalid payload') };
  }

  const existing = await find({ unitNumber: body.unitNumber });
  if (existing.length) {
    console.log('Already exists');
    return { status: 409, json: createError('Rolling stock with this unitNumber already exists.') };
  }

  return { status: 201, json: await create(body) };
};

/**
 * List all RollingStockDocument.
 *
 * TODO: Pagination?
 *
 * @params {Object} body - Request body.
 * @returns {Promise<{ status, json }>}
 */
exports.list = async () => ({ status: 200, json: await find({}) });

/**
 * Read a RollingStockDocument by 'id'.
 *
 * @params {Object} body - Request body.
 * @params {Object} params - Request params.
 * @returns {Promise<{ status, json }>}
 */
exports.read = async (body, params) => {
  const { rollingStockId } = params;
  if (!rollingStockId) {
    console.log('No rollingStockId specified!');
    return { status: 400, json: createError('No ID specified') };
  }

  // Check it exists
  const [existing] = await find({ id: rollingStockId });
  if (!existing) {
    console.log('Not found');
    return { status: 404, json: createError('Not found') };
  }

  const [doc] = await find({ id: rollingStockId });
  return { status: 200, json: doc };
};

/**
 * Completely update a RollingStockDocument by 'id'.
 *
 * @params {Object} body - Request body.
 * @params {Object} params - Request params.
 * @returns {Promise<{ status, json }>}
 */
exports.replace = async (body, params) => {
  const { rollingStockId } = params;
  if (!rollingStockId) {
    console.log('No rollingStockId specified!');
    return { status: 400, json: createError('No ID specified') };
  }

  // Validate the payload
  if (!validate(body)) {
    console.log('Invalid payload');
    return { status: 400, json: createError('Invalid payload') };
  }

  // Check it exists
  const [existing] = await find({ id: rollingStockId });
  if (!existing) {
    console.log('Not found');
    return { status: 404, json: createError('Not found') };
  }

  return { status: 200, json: await replace(existing, body) };
};

/**
 * Delete a RollingStockDocument by 'id'.
 *
 * @params {Object} body - Request body.
 * @params {Object} params - Request params.
 * @returns {Promise<{ status, json }>}
 */
exports.del = async (body, params) => {
  const { rollingStockId } = params;
  if (!rollingStockId) {
    console.log('No rollingStockId specified!');
    return { status: 400, json: createError('No ID specified') };
  }

  // Check it exists
  const [existing] = await find({ id: rollingStockId });
  if (!existing) {
    console.log('Not found');
    return { status: 404, json: createError('Not found') };
  }

  await del(rollingStockId);
  return { status: 200 };
};
