import { createAction } from 'redux-actions';

export const actionPrefix = 'Home/';

export const REQUEST_COURSES = `${actionPrefix}REQUEST_COURSES`;
export const requestCourses = createAction(REQUEST_COURSES);
