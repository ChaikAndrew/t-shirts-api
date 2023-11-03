const {
  getColors,
} = require('../services/colorsServices')

const getColorsController = async (req, res) => {
  const colors = await getColors()
  res.status(200).json({ colors, status: 'success' })
}

module.exports = {
  getColorsController,
}
