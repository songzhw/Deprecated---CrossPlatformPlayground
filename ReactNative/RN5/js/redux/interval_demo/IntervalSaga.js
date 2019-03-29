import { debounce, throttle, put } from "redux-saga/effects";

export const intervalSaga = function* () {
  yield throttle(3000, "ACTION_TYPE_PLAY", onPlay);
  yield debounce(3000, "ACTION_TYPE_PLAY", onStop);
};

const onPlay = function* (action) {
  let time = new Date().toLocaleTimeString();
  console.log(`szw saga throttle receives onPlay(${action.payload.time}) at ${time} `);
  // then to put(saveBookmark) or put(changeProgressText) .... actions
};

const onStop = function* (action) {
  let time = new Date().toLocaleTimeString();
  console.log(`szw saga debounce receives onStop(${action.payload.time}) at ${time} `);
};


/*
[throttle]
szw saga throttle receives onPlay(11:10:01) at 11:10:01
szw saga throttle receives onPlay(11:10:04) at 11:10:04
szw saga throttle receives onPlay(11:10:07) at 11:10:07

szw saga throttle receives onPlay(11:10:08) at 11:10:10
(因为按了stop, 所以后面再也没有数据了)


[debounce]
szw saga throttle receives onPlay(11:16:54) at 11:16:54
szw saga throttle receives onPlay(11:16:57) at 11:16:57
szw saga throttle receives onPlay(11:17:00) at 11:17:00
(01秒时, 就按了stop按钮)
szw saga throttle receives onPlay(11:17:01) at 11:17:03
(后续也再也不收到throttle事件了)
szw saga debounce receives onStop(11:17:01) at 11:17:04
(注意1: 它是在01秒后3秒开始的, 所以接收时间是在04秒)
(注意2: stop播放之后, 只有一次debounce事件, 不会stop后每3秒都来一次debounce)

 */