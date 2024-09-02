const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  q: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('product',productSchema)