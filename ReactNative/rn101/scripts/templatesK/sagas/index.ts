import { Action, AnyAction } from "redux";
import { call, put, takeEvery } from "redux-saga/effects";
import {ActionTypes } from "../actions";

{{actionSagas}}

const saga = function* () {
{{actioRegister}}
};

export default saga;