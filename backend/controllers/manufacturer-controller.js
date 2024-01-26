const Manufacturer = require('../model/Manufacturer')   


const getAllManufacturers = async(req, res, next) => {
    let manufacturers;
    try{
        manufacturers = await Manufacturer.find();
    }
    catch(err){
        console.log(err);
    }
    if(!manufacturers){
        return res.status(404).json({message: 'No results found'})
    }
    return res.status(200).json({manufacturers})
}

exports.getAllManufacturers = getAllManufacturers
