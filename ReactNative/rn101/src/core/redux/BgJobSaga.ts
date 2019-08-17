import { takeEvery, put, select, call, debounce, delay } from "redux-saga/effects";
import { BG_SAGA_INCREASE } from "./BgJobReducer";
import { AnyAction } from "redux";

// @ts-ignore
const onSagaIncrease = function* (action: AnyAction) {
  console.log(`szw saga debounce 5s`, action);
};

// @ts-ignore
const onSagaIncreaseTaken = function* (action: AnyAction) {
  console.log(`szw saga takeEvery`, action);
  yield delay(3000);
  console.log(`szw saga takeEvery after delay(3s)`);
};

export const BgJobSaga = function* () {
  yield debounce(5000, BG_SAGA_INCREASE, onSagaIncrease);
  yield takeEvery(BG_SAGA_INCREASE, onSagaIncreaseTaken);
};