const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  total:  {
    type: Number,
    required:true
  },
  items:  [{
    productId:  {
      type: String,
      required:true
    },
    name:  {
      type: String,
      required:true
    },
    price:  {
      type: Number,
      required:true
    },
    count:  {
      type: Number,
      required:true
    },
    total:  {
      type: Number,
      required:true
    }
  }],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);
