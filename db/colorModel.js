const mongoose = require('mongoose')

const colorShema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Set name'],
  },
  number: {
    type: String,
    unique: true,
    required: [true, 'Set number'],
  },
})

const Color = mongoose.model('Color', colorShema)

module.exports = {
  Color
}
