'use strict'
let mongoose = require('mongoose');

//Schema
let carsSchema = mongoose.Schema({
    plateNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true,
    },
    cellNumber: {
        type: String,
        required: true,
    },
    entryDate: {
        type: Date,
    },
    exitDate: {
        type: Date
    }
});

let Car = module.exports = mongoose.model('Car', carsSchema);