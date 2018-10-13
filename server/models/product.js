const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:  {
    type: String,
    required:true,
    unique:true
  },
  description:  {
    type: String
  },
  vendor:  {
    type: String,
    required:true
  },
  releaseYear:  {
    type: String
  },
  price:  {
    type: Number,
    required:true
  },
  image:  {
    type: String
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
