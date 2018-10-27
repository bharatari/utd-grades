import data from 'utils/data';
import { all, put, take, call, takeLatest, throttle } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from './actions';

export function* fetchSections(action) {
  yield put(actions.requestSections());

  const params = {
    search: action.payload
  };

  try {
    const response = yield call(data.request.bind(data), 'section', 'get', null, params);

    yield put(actions.receiveSections(response));
  } catch (e) {
    yield put(actions.receiveSections(e));
  }
}

export function* fetchOtherSections(action) {
  yield put(actions.requestOtherSections());

  const params = {
    courseNumber: action.payload.number,
    coursePrefix: action.payload.prefix,
  };

  try {
    yield call(delay, 500);

    const response = yield call(data.request.bind(data), 'section', 'get', null, params);

    yield put(actions.receiveOtherSections(response));
  } catch (e) {
    yield put(actions.receiveOtherSections(e));
  }
}

export function* fetchSection(action) {
  yield put(actions.requestSection());

  try {
    const response = yield call(data.request.bind(data), 'section', 'get', action.payload);

    yield put(actions.receiveSection(response));
  } catch (e) {
    yield put(actions.receiveSection(e));
  }
}

export function* rootSaga() {
  yield all([
    takeLatest(actions.fetchSections, fetchSections),
    takeLatest(actions.fetchOtherSections, fetchOtherSections),
    takeLatest(actions.fetchSection, fetchSection),
  ]);
}
