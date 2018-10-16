import productsReducer from '../../../state/reducers/products';
import {GET_PRODUCTS, PRODUCTS_LOADING} from '../../../state/actions/types';

describe('Products reducer tests', () => {
  test('When GET_PRODUCTS is provided with set of 3 product items it should return loading false and set of 3 products', () => {
    const reducedObject = productsReducer(undefined, {type: GET_PRODUCTS, payload: [{}, {}, {}]});
    expect(reducedObject).toBeTruthy();
    expect(reducedObject.loading).toBeFalsy();
    expect(reducedObject.products).toHaveLength(3);
  });

  test('When PRODUCTS_LOADING is provided it should return loading true', () => {
    const reducedObject = productsReducer(undefined, {type: PRODUCTS_LOADING});
    expect(reducedObject).toBeTruthy();
    expect(reducedObject.loading).toBeTruthy();
  });
});
