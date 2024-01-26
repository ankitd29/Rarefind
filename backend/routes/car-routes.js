const express = require('express')
const router = express.Router()
const Car = require('../model/Cars')
const carsController = require('../controllers/cars-controller')

router.get("/", carsController.getAllCars)
router.get("/oldcars", carsController.getOld)
router.get("/newcars", carsController.getNew)
router.post('/', carsController.addCars)
router.get('/:id', carsController.getById)
router.put('/:id', carsController.updateCar)
router.delete('/:id', carsController.deleteCar)

module.exports = router;