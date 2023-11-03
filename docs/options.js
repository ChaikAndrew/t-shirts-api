module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Words REST API',
      version: '1.0.0',

      description: 'The Words API is organized around REST.',
      contact: {
        name: 'DmytroVasylenko',
        email: 'tredstoun651@gmail.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3020/api/'
      },
      {
        url: 'https://phonebook-back-node-js.vercel.app/api/'
      }
    ],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      {
        name: 'Users'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
    },
    security: [
      {
        bearerAuth: []
      }
    ],
  },
  apis: [
    '**/*swagger.js',
    './routes/api/auth.js',
  ]
}
