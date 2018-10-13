import {GET_PRODUCTS, PRODUCTS_LOADING, ERROR,
        ADD_PRODUCT_STARTED, ADD_PRODUCT_SUCESS,
        ADD_PRODUCT_FAIL,
        PRODUCT_REMOVE_CLEAR_FLAG} from './types';
import axios from 'axios';

export const getProducts = () => {
  return dispatch => {
    dispatch({type: PRODUCTS_LOADING});
    getAllProducts(dispatch);
  }
}

export const addNewProduct = (product) => {
  return dispatch => {
    dispatch({type: ADD_PRODUCT_STARTED});
    axios
        .post('/api/product', product)
        .then(res => {
            const {error} = res.data;
            if (error) {
              dispatch({type: ADD_PRODUCT_FAIL})
              dispatch({type: ERROR, payload: error})
            }else {
              dispatch({type: ADD_PRODUCT_SUCESS, payload: res.data});
              getAllProducts(dispatch);
            }
        })
        .catch(e => dispatch({type: ERROR, payload: e}));
  }
}

export const deleteProduct = (id) => {
  console.log(id);
  return dispatch => {
    axios
        .delete(`/api/product/${id}`)
        .then(res => {
            const {error} = res.data;
            if (error) {
              dispatch({type: ERROR, payload: error})
            }else {
              getAllProducts(dispatch);
            }
        })
        .catch(e => dispatch({type: ERROR, payload: e}));
  }
}

export const removeClearFlag = () => {
    return dispatch => dispatch({type: PRODUCT_REMOVE_CLEAR_FLAG})
}

const getAllProducts = (dispatch) => {
  axios
      .get('/api/product/getall')
      .then(res => {
          dispatch({type: GET_PRODUCTS, payload: res.data});
      })
      .catch(e => dispatch({type: ERROR, payload: e}));
}
