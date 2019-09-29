const { create, validate } = require('../db/rollingStock');
const { createError } = require('../util');

module.exports = async (req, res) => {
  if (!validate(req.body)) {
    console.log('Invalid payload');
    return res.status(400).json(createError('Invalid payload'));
  }

  try {
    const op = await create(req.body);
    return res.status(201).json(op.ops[0]);
  } catch (e) {
    console.log(`Error creating rolling stock: ${e.stack}`);
    return res.status(500).json(createError('Database error'));
  }
};