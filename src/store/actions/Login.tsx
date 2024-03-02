import * as types from '../types';
import { AppActionTypes } from './index';

export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginSuccess {
    response: any;
}

export interface ILoginError {
    error: any;
}

export interface ILoginUser {
    type: typeof types.LOGIN_USER;
    payload: ILogin;
}

export interface ILoginUserSuccess {
    type: typeof types.LOGIN_USER_SUCCESS;
    response: ILoginSuccess;
}

export interface ILoginUserError {
    type: typeof types.LOGIN_USER_ERROR;
    error: ILoginError;
}

export const loginUser = (payload: ILogin): AppActionTypes => {
    return {
        type: types.LOGIN_USER,
        payload
    };
};

export const loginSuccess = (response: ILoginSuccess): AppActionTypes => {
    return {
        type: types.LOGIN_USER_SUCCESS,
        response
    };
};

export const loginError = (error: ILoginUserError): AppActionTypes => {
    return {
        type: types.LOGIN_USER_ERROR,
        error
    };
};

export type LoginActionTypes = ILoginUser | ILoginUserSuccess | ILoginUserError;
