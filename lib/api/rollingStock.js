const { create, find, del, validate } = require('../db/rollingStock');
const { createError } = require('../util');

/**
 * Validate and create a RollingStockDocument.
 *
 * @params {Object} req - Request object.
 * @params {Object} res - Response object.
 * @returns {Promise}
 */
exports.create = async (req, res) => {
  if (!validate(req.body)) {
    console.log('Invalid payload');
    return res.status(400).json(createError('Invalid payload'));
  }

  const existing = await find({ unitNumber: req.body.unitNumber });
  if (existing) {
    console.log('Already exists');
    return res.status(409).json(createError('Rolling stock with this unitNumber already exists.'));
  }

  try {
    const doc = await create(req.body);
    return res.status(201).json(doc);
  } catch (e) {
    console.log(`Error creating rolling stock: ${e.stack}`);
    return res.status(500).json(createError('Server error'));
  }
};

/**
 * Read a RollingStockDocument by 'id'.
 *
 * @params {Object} req - Request object.
 * @params {Object} res - Response object.
 * @returns {Promise}
 */
exports.read = async (req, res) => {
  const { rollingStockId } = req.params;
  if (!rollingStockId) {
    console.log('No rollingStockId specified!');
    return res.status(400).json(createError('No ID specified'));
  }

  try {
    const doc = await find({ id: rollingStockId });
    return res.status(200).json(doc);
  } catch (e) {
    console.log(`Error reading rolling stock: ${e.stack}`);
    return res.status(500).json(createError('Server error'));
  }
};

/**
 * Delete a RollingStockDocument by 'id'.
 *
 * @params {Object} req - Request object.
 * @params {Object} res - Response object.
 * @returns {Promise}
 */
exports.del = async (req, res) => {
  const { rollingStockId } = req.params;
  if (!rollingStockId) {
    console.log('No rollingStockId specified!');
    return res.status(400).json(createError('No ID specified'));
  }

  const existing = await find({ id: rollingStockId });
  if (!existing) {
    console.log('Not found');
    return res.status(404).json(createError('Not found'));
  }

  try {
    await del(rollingStockId);
    return res.status(200).send();
  } catch (e) {
    console.log(`Error deleting rolling stock: ${e.stack}`);
    return res.status(500).json(createError('Server error'));
  }
};
