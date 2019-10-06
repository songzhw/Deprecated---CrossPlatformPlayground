import { AnyAction } from "redux";
import { takeEvery, call, fork, take, put, cancelled } from "redux-saga/effects";
import { ChannelAsync_Channel } from "./ChannelAsync_Channel";
import SyncManager from "./SyncManager";

export const ACTION_START_SYNC = "@SAGA/CHANNEL_ASYNC/START_SYNC";
export const ACTION_CONTINUE_SYNC = "@SAGA/CHANNEL_ASYNC/CONTINUE_SYNC";
export const ACTION_TEMP = "@SAGA/CHANNEL_ASYNC/TEMP";

/*
 * 数据有多页, 所以用一个channel来一项项地传递过来
 */
function* onSync(action: AnyAction) {
  const channel = yield call(ChannelAsync_Channel);

  yield fork(SyncManager.sync, "5d99166d340000ec08f48b06");

  try {
    while (true) {
      const nextAction = yield take(channel);
      yield put(nextAction);
    }
  } catch (error) {
    console.log(`szw error : `, error);
  } finally {
    if (yield cancelled()) {
      channel.close();
    }
  }
}

function* onContinueSync(action: AnyAction) {
  const { isComplete, nextId } = action.payload.data;
  console.log(`***szw saga: resp***`, action.payload);
  if (!isComplete) {
    yield call(SyncManager.sync, nextId);
  }
}

function* onTemp(action: AnyAction) {
  console.log(`szw onTemp: `, action);
  yield 10;
}

export function* ChannelAsync_Saga() {
  yield takeEvery(ACTION_START_SYNC, onSync);
  yield takeEvery(ACTION_CONTINUE_SYNC, onContinueSync);
  yield takeEvery(ACTION_TEMP, onTemp);
}

