import { AnyAction } from "redux";
import { takeEvery, call, fork, take, put, cancelled } from "redux-saga/effects";
import { ChannelAsync_Channel } from "./ChannelAsync_Channel";
import SyncManager from "./SyncManager";

export const ACTION_START_SYNC = "@SAGA/CHANNEL_ASYNC/START_SYNC";
export const ACTION_CONTINUE_SYNC = "@SAGA/CHANNEL_ASYNC/CONTINUE_SYNC";

/*
 * 数据有多页, 所以用一个channel来一项项地传递过来
 */
function* onSync(action: AnyAction) {
  const channel = yield call(ChannelAsync_Channel);

  yield fork(SyncManager.start);

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
  console.log(`szw : action2 = `, action);
  yield 10;
}

export function* ChannelAsync_Saga() {
  yield takeEvery(ACTION_START_SYNC, onSync);
  yield takeEvery(ACTION_CONTINUE_SYNC, onContinueSync);
}

