import {ADD_PRODUCT_SUCESS,
        ADD_PRODUCT_STARTED,
        ADD_PRODUCT_FAIL,
        PRODUCT_REMOVE_CLEAR_FLAG} from '../actions/types';


const initialState = {
  product: undefined,
  processing: false,
  clearForm: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_STARTED:
      return {
        ...state,
        processing: true
      };
    case ADD_PRODUCT_SUCESS:
      return {
        ...state,
        processing: false,
        clearForm: true
      };
    case ADD_PRODUCT_FAIL:
      return {
        ...state,
        processing: false
      };
      case PRODUCT_REMOVE_CLEAR_FLAG:
        return {
          ...state,
          processing: false,
          clearForm: false
        };
    default:
      return {...state};
  }
}
