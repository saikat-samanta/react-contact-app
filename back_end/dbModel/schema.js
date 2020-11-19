// jshint esversion : 9
const mongoose = require("mongoose");



const newSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    }
});


const myModel = mongoose.model('dataModel', newSchema);

module.exports = myModel;
