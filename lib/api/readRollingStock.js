const { read } = require('../db/rollingStock');
const { createError } = require('../util');

module.exports = async (req, res) => {
  const { rollingStockId } = req.params;
  if (!rollingStockId) {
    console.log('No rollingStockId specified!');
    return res.status(400).json(createError('No ID specified'));
  }

  try {
    const doc = await read(rollingStockId);
    return res.status(200).json(doc);
  } catch (e) {
    console.log(`Error reading rolling stock: ${e.stack}`);
    return res.status(500).json(createError('Server error'));
  }
};
