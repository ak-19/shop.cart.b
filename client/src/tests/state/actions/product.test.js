import moxios from 'moxios';
import {getProducts, addNewProduct, deleteProduct, removeClearFlag} from '../../../state/actions/product';
import {PRODUCTS_LOADING,
        GET_PRODUCTS,
        ADD_PRODUCT_STARTED,
        ADD_PRODUCT_SUCESS,
        PRODUCT_REMOVE_CLEAR_FLAG} from '../../../state/actions/types';

describe('getProducts action tests', () => {
  beforeEach(function () {
    moxios.install()
  });

  afterEach(function () {
    moxios.uninstall()
  });

  test( `When called Dispatcher should be called twice, first called should get PRODUCTS_LOADING action,
      second call should get GET_PRODUCTS action with 2 items in product collection as it is mocked`, (done) => {
      moxios.stubRequest('/api/product/getall', {
        status: 200,
        response: [{name:'test 1'},{name:'test 2'}]
      });

      let count = 0;

      const fakDispatcher = jest.fn().mockImplementation((action) => {
        count++;
        if (count === 1) {
          expect(action.type).toBe(PRODUCTS_LOADING);
        }
        if (count === 2) {
          expect(action.type).toBe(GET_PRODUCTS);
          expect(action.payload).toHaveLength(2);
          done();
        }
      });

      getProducts()(fakDispatcher);
  });
});

describe('addNewProduct action test', () => {
  beforeEach(() => {
      moxios.install();
  });
  afterEach(() => {
      moxios.uninstall();
  });

  test(`When called should execute provided dispatch twice,
      first call should be ADD_PRODUCT_STARTED,
      second ADD_PRODUCT_SUCESS,
      in second call should receive mocked product object`, (done) => {
      moxios.stubRequest('/api/product', {
        status: 200,
        response: {name: 'test product'}
      });

      let callCount = 0;
      const fakeDispatcher = jest.fn().mockImplementation((action) => {
        callCount++;
        if (callCount === 1) {
          expect(action.type).toBe(ADD_PRODUCT_STARTED);
        }

        if (callCount === 2) {
          expect(action.type).toBe(ADD_PRODUCT_SUCESS);
          expect(action.payload.name).toBe('test product');
          done();
        }
      });

      addNewProduct()(fakeDispatcher);
  });
});

describe('deleteProduct action test', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test(`When called should execute provided dispatch once,
    call should be GET_PRODUCTS`, (done) => {
      moxios.stubRequest('/api/product/1', {
        status: 200,
        response: {}
      });
      moxios.stubRequest('/api/product/getall', {
        status: 200,
        response: []
      });

      const fakeDispatch = jest.fn().mockImplementation(function (action) {
        expect(action.type).toBe(GET_PRODUCTS);
        done();
      });
      deleteProduct(1)(fakeDispatch);
  });
});

describe('removeClearFlag action test', () => {
  test('When called dispatch should be called once and PRODUCT_REMOVE_CLEAR_FLAG action should be sent over it', (done) => {
    const fakeDispatch = jest.fn().mockImplementation((action) => {
      expect(action.type).toBe(PRODUCT_REMOVE_CLEAR_FLAG);
      done();
    });
    removeClearFlag()(fakeDispatch);
  });
});
