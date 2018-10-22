import moxios from 'moxios';
import {addItemToCart,
        deleteItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        submitCart} from '../../../state/actions/cart';

import {ADD_ITEM_TO_CART,
        DELETE_ITEM_FROM_CART,
        INCREASE_ITEM_QUANTITY_IN_CART,
        DECREASE_ITEM_QUANTITY_IN_CART,
        CLEAR_CART} from '../../../state/actions/types';

describe('addItemToCart tests', () => {
  test('When called should call dispatch once with ADD_ITEM_TO_CART action as parameter', (done) => {
    const fakeDisaptch = jest.fn().mockImplementation((action) => {
      expect(action.type).toBe(ADD_ITEM_TO_CART);
      expect(action.payload.id).toBe(1);
      done();
    });
    addItemToCart({id: 1})(fakeDisaptch);
  });
});

describe('deleteItemFromCart tests', () => {
  test('When called should call dispatch once with DELETE_ITEM_FROM_CART action as parameter', (done) => {
    const fakeDisaptch = jest.fn().mockImplementation((action) => {
      expect(action.type).toBe(DELETE_ITEM_FROM_CART);
      expect(action.payload).toBe(1);
      done();
    });
    deleteItemFromCart(1)(fakeDisaptch);
  });
});

describe('increaseItemQuantity tests', () => {
  test('When called should call dispatch once with INCREASE_ITEM_QUANTITY_IN_CART action as parameter', (done) => {
    const fakeDisaptch = jest.fn().mockImplementation((action) => {
      expect(action.type).toBe(INCREASE_ITEM_QUANTITY_IN_CART);
      expect(action.payload).toBe(1);
      done();
    });
    increaseItemQuantity(1)(fakeDisaptch);
  });
});

describe('decreaseItemQuantity tests', () => {
  test('When called should call dispatch once with DECREASE_ITEM_QUANTITY_IN_CART action as parameter', (done) => {
    const fakeDisaptch = jest.fn().mockImplementation((action) => {
      expect(action.type).toBe(DECREASE_ITEM_QUANTITY_IN_CART);
      expect(action.payload).toBe(1);
      done();
    });
    decreaseItemQuantity(1)(fakeDisaptch);
  });
});

describe('submitCart tests', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('When called should call dispatch once with CLEAR_CART action as parameter', (done) => {
    moxios.stubRequest('/api/cart', {
      status: 200,
      response: {}
    });
    const fakeDisaptch = jest.fn().mockImplementation((action) => {
      expect(action.type).toBe(CLEAR_CART);
      done();
    });
    submitCart({})(fakeDisaptch);
  });
});
