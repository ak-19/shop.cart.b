const cartRouter = require('express').Router();
const Product = require('../models/product');
const Cart = require('../models/cart');
const productValidation = require('../validation/product');

cartRouter.post('/', (req,res) => {
  const cart = req.body;

  const newCart = new Cart(cart);
  newCart
  .save()
  .then(r => {
    res.send('Cart saved successfully');
  })
  .catch(e => {
    res.send({error: e});
  })
});

module.exports = cartRouter;
