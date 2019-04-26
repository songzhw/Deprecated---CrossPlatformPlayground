// 100% coverage

import { put, take } from "redux-saga/effects";
import { emitChannel2 } from "./emitChannel";

export function* emitChannelSaga() {
  const channel = yield emitChannel2();
  while (true) {
    const id = yield take(channel);
    yield put({ type: "EC", id: id });
  }
}
