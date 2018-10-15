import productValidation from '../../validation/product';

describe('Product validation tests for empty product object', () => {
  const testProduct = {};
  const validationObject =  productValidation(testProduct);
  test('isValid should be false for empty product object', () => {
    expect(validationObject.isValid).toBeFalsy();
  });

  test('Name property of validation object error should have value "Name is required"', () => {
    expect(validationObject.error.name).toBe('Name is required');
  });

  test('Vendor property of validation object error should have value "Vendor is required"', () => {
    expect(validationObject.error.vendor).toBe('Vendor is required');
  });

  test('Price property of validation object error should have value "Price is required"', () => {
    expect(validationObject.error.price).toBe('Price is required');
  });
});

describe('Product validation tests for full and valid product object', () => {
  const testProduct = {name: 'test', vendor: 'test vendor', price:12.12};
  const validationObject =  productValidation(testProduct);
  test('isValid should be true for full and valid  product object', () => {
    expect(validationObject.isValid).toBeTruthy();
  });

  test('error properties should all be falsy', () => {
    expect(validationObject.error.name).toBeFalsy();
    expect(validationObject.error.vendor).toBeFalsy();
    expect(validationObject.error.price).toBeFalsy();
  });
});
