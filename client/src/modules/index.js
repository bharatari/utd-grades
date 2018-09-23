import { combineReducers } from 'redux';
import course from './course/reducer';

export default function createReducer(injectedReducers) {
  return combineReducers({
    course,
    ...injectedReducers,
  });
}

export function injectReducer(store, name, reducer) {
  store.injectedReducers[name] = reducer;

  store.replaceReducer(createReducer(store.asyncReducers));
}

export function injectSaga(store, saga) {
  store.runSaga(saga);
}
