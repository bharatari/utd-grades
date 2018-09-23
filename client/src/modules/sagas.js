import * as course from './course/sagas';
import { put, take, call, takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
  yield [
    course.rootSaga(),
  ]
}