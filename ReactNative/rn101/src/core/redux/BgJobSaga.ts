import { takeEvery, put, select, call, debounce } from "redux-saga/effects";
import { BG_SAGA_INCREASE } from "./BgJobReducer";
import { AnyAction } from "redux";

// @ts-ignore
const onSagaIncrease = function* (action: AnyAction) {
  console.log(`szw saga got it`, action);
};

export const BgJobSaga = function* () {
  yield debounce(5000, BG_SAGA_INCREASE, onSagaIncrease);
};