import {takeEvery, call, put} from "redux-saga/effects";
import {TRY_LOGIN, loginSucc} from "./actionSession";
import {API_ID_DAY1, API_ID_LOGIN} from './apiConstants'
import {gotDay1, TRY_SCHEDULE_DAY1} from "./actionSchedule";

const rootSaga = function* () {
  yield takeEvery(TRY_LOGIN, tryLogin)
  yield takeEvery(TRY_SCHEDULE_DAY1, tryDay1)
}

const tryLogin = function* (action) {
  try {
    const rawResp = yield call(doFetch, API_ID_LOGIN)
    const resp = yield rawResp.json()
    const newAction = loginSucc(resp)
    yield put(newAction)
  } catch (err) {
    console.log(`saga.tryLogin error = ${err}`)
  }
}

const tryDay1 = function*(action) {
  try {
    const rawResp = yield call(doFetch, API_ID_DAY1)
    const resp = yield rawResp.json()
    const newAction = gotDay1(resp)
    console.log(`\n\nszw saga.day1 = ${JSON.stringify(newAction)}`)
    yield put(newAction)
  } catch (err) {
    console.log(`saga.tryDay1 error = ${err}`)
  }
}

export const doFetch = id => fetch(`http://www.mocky.io/v2/${id}`)

export default rootSaga

