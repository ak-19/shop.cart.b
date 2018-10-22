import React from 'react';
import {Provider} from 'react-redux';
import {shallow} from 'enzyme';

import '../mocks/local-storage';

import StoreWrapper from '../../hoc/storewrapper';

describe('StoreWrapper simple shallow test', () => {
  test('When loaded StoreWrapper should render redux store provider', () => {
    const storeWrapper = shallow(
      <StoreWrapper>
        <div>
          Test text
        </div>
      </StoreWrapper>
    );
    const foundProvider = storeWrapper.find(Provider);
    expect(foundProvider).toBeTruthy();
    expect(foundProvider).toHaveLength(1);
  });
});
