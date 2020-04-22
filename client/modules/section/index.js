import data from 'utils/data';
import { all, put, take, call, takeLatest, throttle } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from './actions';

// search, courseNumber, coursePrefix
export async function fetchSections(params) {
  try { 
    const response = await data.request('section', 'get', null, params);
  } catch (e) {
    throw e;
  }
}

export async function fetchSection(id) {
  try {
    const response = await data.request('section', 'get', id);

    return response;
  } catch (e) {
    throw e;
  }
}
