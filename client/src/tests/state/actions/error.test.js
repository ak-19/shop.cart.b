
import {clearError} from '../../../state/actions/error';
import {ERROR} from '../../../state/actions/types';

describe('clearError test', () => {
  test('When called should call dispatcher once and provide actaion of type ERROR', (done) => {

    const fakeDispatcher = jest.fn().mockImplementation((action) => {
      expect(action.type).toBe(ERROR);
      done();
    });
    clearError()(fakeDispatcher);
  });
});
