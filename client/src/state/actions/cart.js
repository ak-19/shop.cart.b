import axios from 'axios';

import {ADD_ITEM_TO_CART,
        DELETE_ITEM_FROM_CART,
        INCREASE_ITEM_QUANTITY_IN_CART,
        DECREASE_ITEM_QUANTITY_IN_CART,
        CLEAR_CART,
        ERROR} from './types';

export const addItemToCart = (item) => {
  return dispatch => {
    dispatch({type: ADD_ITEM_TO_CART, payload: item});
  }
}

export const deleteItemFromCart = (id) => {
  return dispatch =>  dispatch({type: DELETE_ITEM_FROM_CART, payload: id});
}

export const increaseItemQuantity = (id) => {
  return dispatch =>  dispatch({type: INCREASE_ITEM_QUANTITY_IN_CART, payload: id});
}

export const decreaseItemQuantity = (id) => {
  return dispatch =>  dispatch({type: DECREASE_ITEM_QUANTITY_IN_CART, payload: id});
}

export const submitCart = (cart) => {
  return dispatch =>  {
    axios.post('/api/cart', cart)
    .then(resposne => {
      dispatch({type: CLEAR_CART})
    })
    .catch(e => dispatch({type: ERROR, payload: e}));
  };
}
