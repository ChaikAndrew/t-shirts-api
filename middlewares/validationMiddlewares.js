const Joi = require('joi')
const { ValidationError } = require('../helpers/errors')

const addAndUpdateWordMiddleware = (req, res, next) => {
  const schema = Joi.object({
    text: Joi.string()
      .required()
  })

  const validationResult = schema.validate(req.body)

  if (validationResult.error) {
    next(new ValidationError(validationResult.error))
  };
  next()
}

module.exports = {
  addAndUpdateWordMiddleware,
}
