import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USERS_SUCCESS, GET_USERS_FETCH } from "../../actions/fetchUsers";

async function usersFetch() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(repsonse => {
    return repsonse.json();
  });
}

function* workGetUsersFetch() {
  const users = yield call(usersFetch);
  yield put({ type: GET_USERS_SUCCESS, users });
}

function* getUserSaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch)
}

export default getUserSaga;
