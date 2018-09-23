import data from 'utils/data';
import { put, take, call, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';

export function* fetchCourses() {
  yield put(actions.requestCourses());

  try {
    const response = yield call(data.request.bind(data), 'course', 'get');

    yield put(actions.receiveCourses(response));
  } catch (e) {
    yield put(actions.receiveCourses(e));
  }
}

export function* fetchCourse(action) {
  yield put(actions.requestCourse());

  try {
    const response = yield call(data.request.bind(data), 'course', 'get', action.payload);

    yield put(actions.receiveCourse(response));
  } catch (e) {
    yield put(actions.receiveCourse(e));
  }
}

export function* rootSaga() {
  yield [
    takeLatest(actions.FETCH_COURSES, fetchCourses),
    takeLatest(actions.FETCH_COURSE, fetchCourse),
  ];
}
