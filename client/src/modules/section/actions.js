import { createAction } from 'redux-actions';

export const fetchSections = createAction('FETCH_SECTIONS')
export const requestSections = createAction('REQUEST_SECTIONS');
export const receiveSections = createAction('RECEIVE_SECTIONS');

export const fetchSection = createAction('FETCH_SECTION');
export const requestSection = createAction('REQUEST_SECTION');
export const receiveSection = createAction('RECEIVE_SECTION');
