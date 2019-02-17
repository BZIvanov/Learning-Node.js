const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
  year: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  nps: {
    type: Number,
    required: true
  },
  baseSize: {
    type: Number,
    required: true
  },
  promoters: {
    type: Number,
    required: true
  },
  passives: {
    type: Number,
    required: true
  },
  detractors: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Brand', brandSchema);