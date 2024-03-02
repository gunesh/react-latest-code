import * as types from '../types';

const initialState: { isLoggedIn: boolean; errorMessage: null } = {
  isLoggedIn: false,
  errorMessage: null
};

export default function (state = initialState, action: any): any {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, isLoggedIn: true, response: action.response };
    case types.LOGIN_USER_ERROR:
      return { ...state, isLoggedIn: false, errorMessage: action.errorMessage };
    default:
      return { ...state };
  }
}
