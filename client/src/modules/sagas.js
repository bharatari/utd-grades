import * as section from './section/sagas';
import { all, put, take, call, takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    section.rootSaga(),
  ]);
}
