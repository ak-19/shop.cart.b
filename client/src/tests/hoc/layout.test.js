import React from 'react';
import {shallow} from 'enzyme';
import Layout from '../../hoc/layout';
import Navbar from '../../partialcomponents/navbar';
import Footer from '../../partialcomponents/footer';

describe('Layout simple shallow test', () => {
  test('When loaded should render 1 navbar, 1 footer and provided content', () => {
    const layout = shallow(
      <Layout>
        Test content
      </Layout>
    );
    expect(layout.find(Navbar)).toBeTruthy();
    expect(layout.find(Footer)).toBeTruthy();
    expect(layout.find('Test content')).toBeTruthy();
  });
});
