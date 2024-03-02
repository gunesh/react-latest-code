import { isAuthenticated } from ".";

/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
    isAuthenticated: isAuthenticated(),
    signin(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = true;
        window.localStorage.setItem('isAuthenticated', 'true')
        setTimeout(callback, 100); // fake async
    },
    signout(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

export { fakeAuthProvider };