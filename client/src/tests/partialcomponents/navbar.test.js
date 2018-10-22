import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {mount} from 'enzyme';
import Navbar from '../../partialcomponents/navbar';
import StoreWrapper from '../../hoc/storewrapper';

import '../mocks/local-storage';

describe('Navbar rendering test', () => {
  let navbar;

  beforeEach(() => {
    navbar = mount(
      <StoreWrapper>
      <Router>
      <Navbar/>
      </Router>
      </StoreWrapper>
    );
  });

  afterEach(() => {
    navbar.unmount();
  });

  test(`Should render 3 Link items in this order "Home", "Admin" and "Your cart"
        Should render button with navbar-toggler class`, () => {
    const links = navbar.find(Link);
    expect(links.at(0).text()).toBe('Home');
    expect(links.at(1).text()).toBe('Admin');
    expect(links.at(2).text()).toContain('Your cart');
    expect(navbar.find('button.navbar-toggler')).toBeTruthy();
    expect(navbar.find('button.navbar-toggler')).toHaveLength(1);
  });
});
