import { call, put, takeLatest, all } from "redux-saga/effects";
import { types } from "../actions";
const { USER } = types;

function* signInRequest() {}

function* userSaga() {
  yield all([takeLatest(USER.SIGNIN_REQUEST, signInRequest)]);
}

export default userSaga;
