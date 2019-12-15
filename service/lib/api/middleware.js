const createError = require('../utils/createError');

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
