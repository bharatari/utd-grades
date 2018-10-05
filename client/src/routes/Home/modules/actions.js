import { createAction } from 'redux-actions';

export const actionPrefix = 'Home/';

export const EXAMPLE_ACTION = `${actionPrefix}EXAMPLE_ACTION`;
export const exampleAction = createAction(EXAMPLE_ACTION);

