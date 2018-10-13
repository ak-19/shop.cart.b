module.exports = (product) => {
  const error = {};
  let isValid = true;

  if (!product.name || product.name.length < 1) {
    error.name = 'Name is required';
    isValid = false;
  }

  if (!product.vendor || product.vendor.length < 1) {
    error.vendor = 'Vendor is required';
    isValid = false;
  }

  if (!product.price || product.price  < 1) {
    error.price = 'Price is required';
    isValid = false;
  }

  return {error, isValid};
}
