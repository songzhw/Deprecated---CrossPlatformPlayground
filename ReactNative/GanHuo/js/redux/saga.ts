import {call, put, takeEvery} from "redux-saga/effects";
import {REQUEST_CATEGORY, REQUEST_TODAY, responseCategory, responseToday} from "./reduxGanHuo";
import {API_TODAY, doFetch, getPageForCategory} from "../core/httpEngine";


const rootSaga = function* () {
  yield takeEvery(REQUEST_TODAY, fetchToday);
  yield takeEvery(REQUEST_CATEGORY, fetchCategory)
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

const fetchCategory = function* (action) {
  try {
    let api = getPageForCategory(action.category, action.count, action.page)
    const rawResp = yield call(doFetch, api)
    const resp = yield rawResp.json()
    const newAction = responseCategory(resp)
    yield put(newAction)
  } catch (err) {
    console.log(`saga.fetch category action = ${JSON.stringify(action)} ||  error = ${err}`)
  }
}

export default rootSaga