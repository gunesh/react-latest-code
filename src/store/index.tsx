import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';

const initialState = {};
const sagaMiddleWare = createSagaMiddleWare();
let middleware: any = [];
if (process.env.NODE_ENV === 'development') {
  middleware = [sagaMiddleWare, logger];
} else {
  middleware = [sagaMiddleWare];
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleWare.run(rootSaga);

export const dispatch = store.dispatch;
export default store;
