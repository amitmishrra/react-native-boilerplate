import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from '../../actions/login';
import loginApi from '../../../api/login';

function* loginWorkerSaga(args) {
  try {
    const userData = yield call(loginApi, { email: args.email, password: args.password });
    yield put({ type: LOGIN_SUCCESS, userData });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, errorMessage: '' });
    // yield put({ type: LOGIN_FAILURE, errorMessage: '' });
  }
}

export default function* loginWatcherSaga() {
  yield takeEvery(LOGIN_START, loginWorkerSaga);
}
