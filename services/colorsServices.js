const { Color } = require('../db/colorModel')

const getColors = async () => {
  const colors = await Color.find({})
  console.log('getWords  words:', colors)
  return colors
}

module.exports = {
  getColors
}
