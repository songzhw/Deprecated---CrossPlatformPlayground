import { AnyAction } from "redux";
import { takeEvery } from "redux-saga/effects";

export const ACTION_START_SYNC = "@SAGA/CHANNEL_ASYNC/START_SYNC";

/*
 * 数据有多页, 所以用一个channel来一项项地传递过来
 */
function* onSync(action: AnyAction) {
  const resp = yield fetch("http://www.mocky.io/v2/5d99166d340000ec08f48b06");
  const str = yield resp.json();
  console.log(`szw : resp = `, str);
}

export function* ChannelAsync_Saga() {
  yield takeEvery(ACTION_START_SYNC, onSync);
}
