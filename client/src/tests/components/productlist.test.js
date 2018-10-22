import React from 'react';
import {mount, shallow} from 'enzyme';
import moxios from 'moxios';
import ProductList from '../../components/productlist';
import Product from '../../components/product';

import StoreWrapper from '../../hoc/storewrapper';

import '../mocks/local-storage';
import products from '../mocks/products';

describe('ProductList tests', () => {

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('/api/product/getall', {
      status: 200,
      response: products
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test(`When fully loaded,
     should have h1 Title
     lead paragraph
     and list of 2 products (provided by mocks via moxios stub) rendered`, (done) => {
     const productlist = mount(
       <StoreWrapper>
          <ProductList/>
       </StoreWrapper>
     );
     setTimeout(function () {
       productlist.update();
       const h1Title = productlist.find('h1.display-4');
       expect(h1Title).toBeTruthy();
       expect(h1Title.text()).toBe('Shop cart A');

       const pLead = productlist.find('p.lead');
       expect(pLead).toBeTruthy();
       expect(pLead.text()).toBe('Click buy and add product to the cart');

       const products = productlist.find(Product);
       expect(products).toHaveLength(2);
       done();
     }, 100);
  });
});
