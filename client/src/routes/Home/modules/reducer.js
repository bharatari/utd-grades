import { handleActions } from 'redux-actions';
import { EXAMPLE_ACTION } from './actions';

const initialState = {
  example: false,
};

export default handleActions({
  [EXAMPLE_ACTION]: (state, action) => ({
    ...state,
    example: true,
  }),
}, initialState);
