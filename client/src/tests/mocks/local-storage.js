global.localStorage = {
  getItem: function() {
    return this.cart;
  },
  setItem: function(key, val) {
    this.cart = val;
  },
  clear: function() {
    this.cart = null;
  },
  cart: null
};
