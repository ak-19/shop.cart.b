import {GET_PRODUCTS, PRODUCTS_LOADING} from '../actions/types';

const initialState = {
  products: [],
  loading: false
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload
      };
      case PRODUCTS_LOADING:
        return {
          ...state,
          loading: true
        };
    default:
      return state;
  }
};

export default productsReducer;
