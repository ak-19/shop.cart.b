import React from 'react';
import { shallow } from 'enzyme';
import { Switch } from 'react-router-dom';

import './mocks/local-storage';

import Application from '../application';

describe('Application simple rendering test', () => {
  let application;
  beforeEach(() => {
    application = shallow(<Application/>);
  });

  test('Should render normally', () => {
    expect(application).toBeTruthy();
  });

  test('Should render 1 Switch component', () => {
    const switchComponent = application.find(Switch);
    expect(switchComponent).toBeTruthy();
    expect(switchComponent).toHaveLength(1);
  });

  test('Should render 1 Provider component', () => {
    const providerComponent = application.find('Provider');
    expect(providerComponent).toBeTruthy();
    expect(providerComponent).toHaveLength(1);
  });

  test('Should render 3 route components', () => {
    const routes = application.find('Route');
    expect(routes).toBeTruthy();
    expect(routes).toHaveLength(3);
  });
});
