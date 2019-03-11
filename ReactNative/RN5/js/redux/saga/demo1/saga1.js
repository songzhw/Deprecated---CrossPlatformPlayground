import { takeEvery, call, put, take } from "redux-saga/effects";
import { CHANNEL_DEMO, getChannelResultAction } from "../../research/channelDemoReducer";
import Newspaper from "../ex/Newspaper";
import doubleChannel from "./channel1";


const sagas = function* () {
  yield takeEvery(CHANNEL_DEMO, onGotAction);
};

const onGotAction = function* (action) {
  console.log(`szw saga got action : ${JSON.stringify(action)}`);
  const channel = yield call(doubleChannel, Newspaper);
  try {
    while (true) {
      const evenNum = yield take(channel);
      yield put(getChannelResultAction(evenNum));
    }
  } catch (error) {
    console.log(`szw chanel demo saga error = ${JSON.stringify(error)}`);
  }
};

export default sagas;