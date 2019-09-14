import { Action, AnyAction } from "redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { ActionTypes } from "../actions";

const setProgress = function* (action: AnyAction) {

};
const postProgress = function* (action: AnyAction) {

};
const clearProgress = function* (action: AnyAction) {

};


const saga = function* () {
  yield takeEvery(ActionTypes.SET_PROGRESS, setProgress);
  yield takeEvery(ActionTypes.POST_PROGRESS, postProgress);
  yield takeEvery(ActionTypes.CLEAR_PROGRESS, clearProgress);
};

export default saga;
