import { actionChannel, race, put, take, call } from "redux-saga/effects";

export function* actionChannelSaga() {
  const channel = yield actionChannel("TYPE_USER_REQUEST");
  while (true) {
    const { id } = yield take(channel);
    yield put({ type: "TYPE_USER_RESPONSE", id: id });
  }
}
