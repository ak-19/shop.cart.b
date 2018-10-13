import {ERROR} from './types';

export const clearError = () => {
  return dispatch => dispatch({type: ERROR, payload: undefined})
}
