import {call, put, takeEvery} from "redux-saga/effects";
import {REQUEST_TODAY, responseToday} from "./reduxGanHuo";
import {API_TODAY, doFetch} from "../core/httpEngine";


const rootSaga = function* () {
  yield takeEvery(REQUEST_TODAY, fetchToday);
}

const fetchToday = function* () {
  try {
    const rawResp = yield call(doFetch, API_TODAY)
    const resp = yield rawResp.json()
    const newAction = responseToday(resp)
    yield put(newAction)
  } catch (err) {
    console.log(`saga.fetch schedule error = ${err}`)
  }
}

export default rootSaga