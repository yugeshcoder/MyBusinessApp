const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rawproductSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  where: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  tones: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  extraCharge: {
    type: Number,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('rawProduct',rawproductSchema)