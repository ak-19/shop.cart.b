const productRouter = require('express').Router();
const Product = require('../models/product');
const productValidation = require('../validation/product');
productRouter.get('/getall', (req,res) => {
  Product.find({})
         .then(products => {
           res.json(products);
         })
         .catch(e => res.send(e))
});

productRouter.post('/', (req,res) => {
  const product = req.body;
  const {error, isValid} = productValidation(product);
  if (!isValid) {
    return res.json({error})
  }
  const {name} = product;
  Product.find({name})
  .then(foundProduct => {
    if (foundProduct && foundProduct.length) {
      const error = {name: 'Product with that name already exists'};
      return res.json({error})
    }
    new Product(product)
    .save()
    .then(r => {
      res.json(r);
    })
    .catch(e => {
      res.send(e);
    });
  })
  .catch(e => {
    console.log(e);
    res.send(e);
  })
});

productRouter.delete('/:id', (req,res) => {
  const {id} = req.params;
  if (!id) {
    return res.json({error: 'Id can not be empty'})
  }

  Product
  .findByIdAndDelete(id)
  .then(deletedProduct => {
    if (deletedProduct) {
      return res.json({msg: 'Product deleted'})
    }
  })
  .catch(e => {
    res.send(e);
  })
});

module.exports = productRouter;
