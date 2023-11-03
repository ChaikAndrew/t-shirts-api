const express = require('express')
const router = express.Router()
const {
  getColorsController,
} = require('../../controllers/colorsControllers')

const { asyncWrapper } = require('../../helpers/apiHelpers')

// GET ColorsList
router.get('/', asyncWrapper(getColorsController))

module.exports = router
