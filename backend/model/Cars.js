const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const carsSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    newOrOld: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Car", carsSchema);
    