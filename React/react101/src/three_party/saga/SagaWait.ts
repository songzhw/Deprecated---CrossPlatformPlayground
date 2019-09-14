import { AnyAction } from "redux";
import { takeEvery, put, call, take } from "redux-saga/effects";

export const SHOW_USER = "SHOW_USER";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_DONE = "FETCH_USER_DONE";

function* startShowUser(action: AnyAction) {
  const { id } = action.payload;
  yield put({ type: FETCH_USER, payload: { id } });
  // The result of yield take(pattern) is an action object being dispatched.
  const action2 = yield take(FETCH_USER_DONE);
  console.log(`szw saga action2 = `, action2);
}

function* startFetchUser(action: AnyAction) {
  const id = action.payload.id;
  const user = { id: id * 1000 + 123, name: "hello", sex: "female" };
  yield put({ type: FETCH_USER_DONE, payload: { user } });
}

export function* waitAnotherActionSaga() {
  yield takeEvery(SHOW_USER, startShowUser);
  yield takeEvery(FETCH_USER, startFetchUser);
}
