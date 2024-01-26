const Car = require('../model/Cars') 
const Manufacturer = require('../model/Manufacturer')   

const getAllCars = async(req, res, next) => {
    let cars;
    try{
        cars = await Car.find();
    }
    catch(err){
        console.log(err);
    }
    if(!cars){
        return res.status(404).json({message: 'No results found'})
    }
    return res.status(200).json({cars})
}

const getOld = async(req, res, next) => {
    let cars;
    try{
        cars = await Car.find({newOrOld: false});
    }
    catch(err){
        console.log(err);
    }
    if(!cars){
        return res.status(404).json({message: 'No results found'})
    }
    return res.status(200).json({cars})
}

const getNew = async(req, res, next) => {
    let cars;
    try{
        cars = await Car.find({newOrOld: true});
    }
    catch(err){
        console.log(err);
    }
    if(!cars){
        return res.status(404).json({message: 'No results found'})
    }
    return res.status(200).json({cars})
}

const getById = async(req, res, next) => {
    const id = req.params.id
    let car;
    try{
        car = await Car.findById(id)
    }
    catch(err){
        console.log(err);
    }
    if(!car){
        return res.status(404).json({message: 'No car found'})
    }
    return res.status(200).json({car})
}

const addCars = async(req, res, next) => {
    const {brand, model, price, image, time, year} = req.body
    let car;
    try{
        
        if(year > 2000) {
            newOrOld = true;
            car = new Car({
                brand,
                model,
                price,
                newOrOld,
                image,
                time
            });
        }
        else {
            newOrOld = false;
            car = new Car({
                brand,
                model,
                price,
                newOrOld,
                image,
                time
            });
        }
        await car.save()
    }
    catch(err){
        console.log(err);
    }

    if(!car){
        return res.status(500).json({message: 'Cannot add car'})
    }
    return res.status(201).json({car})
}

const updateCar = async(req, res, next) => {
    const id = req.params.id
    const {brand, model, price, newOrOld, time, image} = req.body
    let car;
    try{
        car = await Car.findByIdAndUpdate(id, {
            brand,
            model,
            price,
            newOrOld,
            image,
            time
        })
       car = await car.save()
    }
    catch(err){
        console.log(err);
    }
    if(!car){
        return res.status(404).json({message: 'Cannot update using this Id'})
    }
    return res.status(200).json({car})

}

const deleteCar = async(req, res, next) => {
    const id = req.params.id
    let car;
    try{
        car = await Car.findByIdAndRemove(id)
    }
    catch(err){
        console.log(err);
    }
    if(!car){
        return res.status(404).json({message: 'Cannot delete entry'})
    }
    return res.status(200).json({message: 'Entry deleted'})
}


exports.getAllCars = getAllCars
exports.getOld = getOld
exports.getNew = getNew
exports.addCars = addCars
exports.getById = getById
exports.updateCar = updateCar
exports.deleteCar = deleteCar