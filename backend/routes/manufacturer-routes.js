const express = require('express')
const router2 = express.Router()
const Manufacturer = require('../model/Manufacturer')
const manufacturersController = require('../controllers/manufacturer-controller')


router2.get("/", manufacturersController.getAllManufacturers)

module.exports = router2;
