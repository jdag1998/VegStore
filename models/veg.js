// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const vegSchema = new Schema({
    name: { type: String, required: true }, 
    brand: { type: String, required: true }, 
    costEfficient: Boolean
})

// create a Model from our Schema
const Veg = mongoose.model('Veg', vegSchema)

// export our Model
module.exports = Veg;