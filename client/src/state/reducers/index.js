import {combineReducers} from 'redux';
import productsReducer from './products';
import addProductReducer from './addproduct';
import errorReducer from './error';
import cartReducer from './cart';
export default combineReducers({
  productsReducer,
  addProductReducer,
  cartReducer,
  errorReducer
});
