import { createAction } from 'redux-actions';

export const fetchSections = createAction('FETCH_SECTIONS')
export const requestSections = createAction('REQUEST_SECTIONS');
export const receiveSections = createAction('RECEIVE_SECTIONS');

export const fetchOtherSections = createAction('FETCH_OTHER_SECTIONS');
export const requestOtherSections = createAction('REQUEST_OTHER_SECTIONS');
export const receiveOtherSections = createAction('RECEIVE_OTHER_SECTIONS');

export const fetchSection = createAction('FETCH_SECTION');
export const requestSection = createAction('REQUEST_SECTION');
export const receiveSection = createAction('RECEIVE_SECTION');
