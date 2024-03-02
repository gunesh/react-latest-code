import { all, fork } from 'redux-saga/effects';
import { watchers } from './Watchers';


export default function* rootSaga(): any {
  yield all([fork(watchers)]);
}
