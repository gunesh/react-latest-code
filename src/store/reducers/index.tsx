import { combineReducers } from 'redux';
import * as types from '../types';
import login from './Login';
const appReducer = combineReducers({
    login
});

export type AppState = ReturnType<typeof appReducer>;

export default (state: any, action: any) => {
    if (action.type === types.CLEAN_REDUCER_BY_REDUCER_NAME) {
        state = { ...state, ...action.payload };
    }
    return appReducer(state, action);
};
