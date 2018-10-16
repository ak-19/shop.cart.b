import cartReducer from '../../../state/reducers/cart';
import {ADD_ITEM_TO_CART,
        DELETE_ITEM_FROM_CART,
        INCREASE_ITEM_QUANTITY_IN_CART,
        DECREASE_ITEM_QUANTITY_IN_CART,
        RESTORE_CART_FROM_LOCALSTORAGE_IF_EXISTS,
        CLEAR_CART} from '../../../state/actions/types';

import '../../mocks/local-storage.js';

describe('ADD_ITEM_TO_CART  and DELETE_ITEM_FROM_CART tests', () => {
  test(`When item is inserted into the
        cart, should have 1 item in local
        storage and 1 in reduced object, total should be equal to item price`, () => {
    const reducedObject  = cartReducer(undefined, {type: ADD_ITEM_TO_CART, payload: {productId: 1, price: 20}});
    const cart = JSON.parse(localStorage.cart);
    expect(cart.items).toHaveLength(1);
    expect(reducedObject.items).toHaveLength(1);
    expect(cart.total).toBe(20);
    expect(reducedObject.total).toBe(20);
  });

  test(`When item is delete from the
        cart, should have 0 items in local
        storage and 0 in reduced object, total should be equal 0`, () => {
    const reducedObject  = cartReducer(undefined, {type: DELETE_ITEM_FROM_CART, payload: 1});
    const cart = JSON.parse(localStorage.cart);
    expect(cart.items).toHaveLength(0);
    expect(reducedObject.items).toHaveLength(0);
    expect(cart.total).toBe(0);
    expect(reducedObject.total).toBe(0);
  });
});


describe('INCREASE_ITEM_QUANTITY_IN_CART, DECREASE_ITEM_QUANTITY_IN_CART and CLEAR_CART tests', () => {
  let reducedObject;
  beforeEach(() => {
    reducedObject =cartReducer(undefined, {type: CLEAR_CART});
    reducedObject = cartReducer(reducedObject, {type: ADD_ITEM_TO_CART, payload: {productId: 1, price: 20}});
  });

  test(`When item is increased within the cart,
        should have 1 item in local storage and 1 in reduced object,
        total should be equal to item count price and item should have count of 2`, () => {
    reducedObject = cartReducer(reducedObject, {type: INCREASE_ITEM_QUANTITY_IN_CART, payload: 1});
    const cart = JSON.parse(localStorage.cart);
    expect(cart.items).toHaveLength(1);
    expect(reducedObject.items).toHaveLength(1);
    expect(cart.total).toBe(40);
    expect(reducedObject.total).toBe(40);
    expect(reducedObject.items[0].count).toBe(2);
  });

  test(`When item is decreased within the cart,
        should have 0 item in local storage and 0 in reduced object,
        total should be equal to 0`, () => {
    reducedObject = cartReducer(reducedObject, {type: DECREASE_ITEM_QUANTITY_IN_CART, payload: 1});
    const cart = JSON.parse(localStorage.cart);
    expect(cart.items).toHaveLength(0);
    expect(reducedObject.items).toHaveLength(0);
    expect(cart.total).toBe(0);
    expect(reducedObject.total).toBe(0);
  });
});
