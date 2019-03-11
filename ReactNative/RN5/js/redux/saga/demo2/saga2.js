import { takeEvery, call, put, take } from "redux-saga/effects";
import { CHANNEL_DEMO2, getChannelResultAction2 } from "../../research/channel2Reducer";
import Newspaper from "../ex/Newspaper";
import tripleChannel from "./channel2";

const sagas = function* () {
  yield takeEvery(CHANNEL_DEMO2, onGotAction);
};

const onGotAction = function* (action) {
  console.log(`szw saga2 got action : ${JSON.stringify(action)}`);
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

export default sagas;