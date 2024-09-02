const mongoose = require('mongoose')

const Schema = mongoose.Schema

const soldproductSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  list: [{
    company: {
      type: String,
      required: true
    },
    quality: {
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
    },
    rate: {
      type: Number,
      required: true
    }
  }],
  extraCharge: {
    type: Number,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('soldProduct',soldproductSchema)