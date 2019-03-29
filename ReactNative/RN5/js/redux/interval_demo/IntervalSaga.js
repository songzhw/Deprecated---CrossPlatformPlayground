import { debounce, throttle, put } from "redux-saga/effects";

export const intervalSaga = function* () {
  yield throttle(3000, "ACTION_TYPE_PLAY", onPlay);
};

const onPlay = function* (action) {
  let time = new Date().toLocaleTimeString();
  console.log(`szw saga receives onPlay : current = ${time} `);
  // then to put(saveBookmark) or put(changeProgressText) .... actions
};