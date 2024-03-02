import { all, takeEvery, debounce, takeLatest } from 'redux-saga/effects';
import * as types from '../types';
import { loginSaga } from './AutheticationSaga';

export function* watchers(): any {

    yield all([takeEvery(types.LOGIN_USER, loginSaga)]);

}