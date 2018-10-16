import errorReducer from '../../../state/reducers/error';
import {ERROR} from '../../../state/actions/types';


describe('Error reducer test', () => {
  test('When received ERROR type action should return object with vaild error message', () => {
    const errorReducerObject = errorReducer(undefined, {type: ERROR, payload: 'test error content'});
    expect(errorReducerObject.error).toBe('test error content');
  });
});
