var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({

  id:{
    type: Number,
    unique: true,
    required: false
  },
  name: {
    type: String,
    required: true,
    default: "Soru"
  },
  img : {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  breakfast: {
    type: Boolean,
    required: true
  },
  lunch: {
    type: Boolean,
    required: true
  },
  dinner: {
    type: Boolean,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  provider_name: {
    type: String,
    required: true
  },
  provider_address: {
    type: String,
    required: true
  },
  provider_id: {
    type: Number,
    required: true
  },
  lon: {
    type: Number,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  zoom: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  tax: {
    type: Number,
    required: true
  },
  available: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    required: false
  },
  updated_at: {
    type: Date,
    required: false
  }

},{
    timestamps: true
}, { collection: 'foods' });

module.exports = mongoose.model('Item', itemSchema);
