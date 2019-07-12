import { all, fork } from "redux-saga/effects";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
