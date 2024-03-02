import { call, put } from 'redux-saga/effects';
import { loginUserService } from '../services/Login';
import * as types from '../types';

export function* loginSaga(payload: any): any {
    try {
        const response = yield call(loginUserService, payload);
        yield put({ type: types.LOGIN_USER_SUCCESS, response });
    } catch (error) {
        yield put({ type: types.LOGIN_USER_ERROR, errorMessage: 'Error to login' });
    }
}
