import data from 'utils/data';
import { all, put, take, call, takeLatest, throttle } from 'redux-saga/effects';
import * as actions from './actions';
import parse from 'utils/parser';

export function* fetchSections(action) {
  yield put(actions.requestSections());

  const params = parse.parseSearchString(action.payload);
  console.log(params);
  try {
    const response = yield call(data.request.bind(data), 'section', 'get', null, params);

    yield put(actions.receiveSections(response));
  } catch (e) {
    yield put(actions.receiveSections(e));
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
    throttle(1000, actions.fetchSections, fetchSections),
    takeLatest(actions.fetchSection, fetchSection),
  ]);
}
