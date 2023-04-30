import { all } from 'redux-saga/effects';
import getUserSaga from './fetchUsers';
import loginWatcherSaga from './login';

function* rootSaga() {
  yield all([ getUserSaga(), loginWatcherSaga() ]);
}

export default rootSaga;
