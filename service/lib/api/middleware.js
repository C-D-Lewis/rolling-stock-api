const createError = require('../utils/createError');

/**
 * Function to allow handlers to return response objects, and handle errors.
 *
 * @param {Function} handler - API handler function.
 * @returns {Function} Function provided to express.
 */
const middleware = handler => async (req, res) => {
  try {
    const { status, json } = await handler(req.body, req.params);
    return json ? res.status(status).json(json) : res.status(status).send();
  } catch (e) {
    console.log(e);
    return res.status(500).json(createError('Server error'));
  }
};

module.exports = middleware;
