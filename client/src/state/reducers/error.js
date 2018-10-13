import {ERROR} from '../actions/types';

export default (state = {error: undefined}, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return {...state};
  }
}
