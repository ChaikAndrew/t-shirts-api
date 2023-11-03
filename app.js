const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const usersRouter = require('./routes/api/user')
const colorsRouter = require('./routes/api/colors')
const { errorHandler } = require('./helpers/apiHelpers')
const app = express()
const helmet = require('helmet')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const buildSpecs = require('./docs/helpers/buildSpecs')
const swaggerOptions = require('./docs/options')
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'
const swaggerDocs = swaggerJsDoc(swaggerOptions)
swaggerDocs.paths = buildSpecs(swaggerDocs.paths)

app.use(logger(formatsLogger))
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs, {
  customCssUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
  customJs: [
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
  ],
  customSiteTitle: 'Words API documentation',
}))
app.use(express.static('public'))
app.use('/api/users', usersRouter)
app.use('/api/colors', colorsRouter)
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})
app.use(errorHandler)

module.exports = app
