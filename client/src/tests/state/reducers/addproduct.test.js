import addproduct from '../../../state/reducers/addproduct';
import {ADD_PRODUCT_SUCESS,
        ADD_PRODUCT_STARTED,
        ADD_PRODUCT_FAIL,
        PRODUCT_REMOVE_CLEAR_FLAG} from '../../../state/actions/types';


describe('Add product reducer test set', () => {
  const reducedObject = addproduct(undefined, {type: ADD_PRODUCT_STARTED});
  test('When ADD_PRODUCT_STARTED should have processing true', () => {
    expect(reducedObject.processing).toBeTruthy();
  });
  test('When ADD_PRODUCT_STARTED should have clearForm false', () => {
    expect(reducedObject.clearForm).toBeFalsy();
  });
});

describe('Add product sucess reducer test set', () => {
  const reducedObject = addproduct(undefined, {type: ADD_PRODUCT_SUCESS});
  test('When ADD_PRODUCT_SUCESS should have processing false', () => {
    expect(reducedObject.processing).toBeFalsy();
  });
  test('When ADD_PRODUCT_SUCESS should have clearForm true', () => {
    expect(reducedObject.clearForm).toBeTruthy();
  });
});

describe('Add product fail reducer test set', () => {
  const reducedObject = addproduct(undefined, {type: ADD_PRODUCT_FAIL});
  test('When ADD_PRODUCT_FAIL should have processing false', () => {
    expect(reducedObject.processing).toBeFalsy();
  });
  test('When ADD_PRODUCT_FAIL should have clearForm false', () => {
    expect(reducedObject.clearForm).toBeFalsy();
  });
});

describe('Add product clear flag reducer test set', () => {
  const reducedObject = addproduct(undefined, {type: PRODUCT_REMOVE_CLEAR_FLAG});
  test('When PRODUCT_REMOVE_CLEAR_FLAG should have processing false', () => {
    expect(reducedObject.processing).toBeFalsy();
  });
  test('When PRODUCT_REMOVE_CLEAR_FLAG should have clearForm false', () => {
    expect(reducedObject.clearForm).toBeFalsy();
  });
});
