import { AnyAction } from "redux";
import { takeEvery, call, take, put, cancelled } from "redux-saga/effects";
import { ChannelAsync_Channel } from "./ChannelAsync_Channel";
import SyncManager from "./SyncManager";

export const ACTION_START_SYNC = "@SAGA/CHANNEL_ASYNC/START_SYNC";
export const ACTION_CONTINUE_SYNC = "@SAGA/CHANNEL_ASYNC/CONTINUE_SYNC";

/*
 * 数据有多页, 所以用一个channel来一项项地传递过来
 */
function* onSync(action: AnyAction) {
  const channel = yield call(ChannelAsync_Channel);
  console.log(`szw 000: `, channel);

  yield call(SyncManager.start);

  try {
    console.log(`szw 001`);
    while (true) {
      console.log(`szw 002`);
      const nextAction = yield take(channel);
      console.log(`szw 003`, nextAction);
      yield put(nextAction);
      console.log(`szw 004`);
    }
  } catch (error) {
    console.log(`szw error : `, error);
  } finally {
    console.log(`szw finally`);
    if (yield cancelled()) {
      channel.close();
    }
  }
}

function* onContinueSync(action: AnyAction) {
  console.log(`szw : action2 = `, action);
  yield call(SyncManager.fetchApi, "100");
}

export function* ChannelAsync_Saga() {
  yield takeEvery(ACTION_START_SYNC, onSync);
  yield takeEvery(ACTION_CONTINUE_SYNC, onContinueSync);
}

