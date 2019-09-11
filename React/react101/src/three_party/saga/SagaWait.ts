import { AnyAction } from "redux";
import { takeEvery, put, call, take } from "redux-saga/effects";

export const SHOW_USER = "SHOW_USER";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_DONE = "FETCH_USER_DONE";

function* startShowUser(action: AnyAction) {
  const { id } = action.payload;
  yield put({ type: FETCH_USER, payload: { id } });
}

export function* waitAnotherActionSaga() {
  yield takeEvery(SHOW_USER, startShowUser);
}
