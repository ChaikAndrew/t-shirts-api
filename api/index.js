require('dotenv').config()
const { connectMongoDb } = require('../db/connection')
const app = require('../app')

const PORT = process.env.PORT || 3040

const start = async () => {
  try {
    await connectMongoDb()
    console.log('Database connection successful')

    app.listen(PORT, async () => {
      console.log(`Server running. Use our API on port: ${PORT}`)
    })
  } catch (error) {
    console.error(`Failed to launch aplication with error: ${error.message}`)
    process.exit(1)
  }
}

start()

module.exports = app
