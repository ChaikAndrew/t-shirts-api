const mongoose = require('mongoose')

const uriDb = process.env.DB_HOST

const connectMongoDb = async () => {
  return mongoose.connect(uriDb)
}

module.exports = {
  connectMongoDb
}
