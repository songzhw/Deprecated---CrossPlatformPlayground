import { takeEvery, call, put, take, fork, delay } from "redux-saga/effects";
import { CHANNEL_DEMO2, CHANNEL_REQUEST2, getChannelResultAction2 } from "../../research/channel2Reducer";
import Newspaper from "../ex/Newspaper";
import tripleChannel from "./channel2";

const sagas = function* () {
  yield takeEvery(CHANNEL_REQUEST2, onRequest);
  yield takeEvery(CHANNEL_DEMO2, onGotAction);
};

const onRequest = function* (action) {
  yield fork(delayJob, action);

  const channel = yield call(tripleChannel, Newspaper);
  try {
    while (true) {
      const evenNum = yield take(channel);
      yield put(getChannelResultAction2(evenNum));
    }
  } catch (error) {
    console.log(`szw chanel2 demo saga error = ${JSON.stringify(error)}`);
  }
};

const delayJob = function* (action) {
  yield delay(100);
  yield call(onGotAction, action);
};

const onGotAction = function* (action) {
  console.log(`szw saga2 got action`);
  Newspaper.createNews();
};

export default sagas;