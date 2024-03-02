export { Connector } from '../store/connect';
export { bindActionCreators } from 'redux';
export type { Dispatch } from 'redux';
export type { AppState } from '../store/reducers';

const isAuthenticated = () => {
    return window.localStorage.getItem('isAuthenticated') === 'true' ? true : false
}

const setAuthUser = (user: any) => {
    if(!user){
        window.localStorage.removeItem('user');
    }
    return window.localStorage.setItem('user', user);
}

const getAuthUser = () => {
    return window.localStorage.getItem('user');
}

export { isAuthenticated, setAuthUser, getAuthUser };