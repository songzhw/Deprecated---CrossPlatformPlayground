import { takeEvery, put, select, call } from "redux-saga/effects";
import { BG_SAGA_INCREASE } from "./BgJobReducer";
import { AnyAction } from "redux";

const onSagaIncrease = function* (action: AnyAction) {
  console.log(`szw saga got it`, action);
};

export const BgJobSaga = function* () {
  yield takeEvery(BG_SAGA_INCREASE, onSagaIncrease);
};