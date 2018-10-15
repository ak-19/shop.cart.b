import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../state/store';
import {RESTORE_CART_FROM_LOCALSTORAGE_IF_EXISTS} from '../state/actions/types';

class StoreWrapper extends Component {
  componentDidMount(){
    store.dispatch({type: RESTORE_CART_FROM_LOCALSTORAGE_IF_EXISTS});
  }
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default StoreWrapper;
