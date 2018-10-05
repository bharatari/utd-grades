import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import section from './section/reducer';

export default function createReducer(injectedReducers) {
  return combineReducers({
    section,
    form,
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
