const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const manufacturerSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    carNumber: {
        type: Number,
        required: true
    },
    models: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Manufacturers', manufacturerSchema);