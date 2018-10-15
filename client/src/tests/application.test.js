import React from 'react';
import { shallow } from 'enzyme';

import Application from '../application';

describe('Application smoke test', () => {
  test('Juts div fake test', () => {
    const div = shallow(<Application/>);
    expect(div).toBeTruthy();
  });
});
