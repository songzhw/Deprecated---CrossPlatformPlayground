import {takeEvery, call, put} from "redux-saga/effects";
import {TRY_LOGIN, LOGIN_SUCC} from "./actionSession";
import {LOGIN_API_ID} from './apiConstants'

const rootSaga = function* () {
  yield takeEvery(TRY_LOGIN, tryLogin)
}

const tryLogin = function* (action) {
  console.log(`saga tryLogin()`)
  try {
    const rawResp = yield call(doFetch, LOGIN_API_ID)
    const resp = yield rawResp.json()
    console.log(`saga resp = ${JSON.stringify(resp)}`)
  } catch (err) {
    console.log(`saga.tryLogin error = ${err}`)
  }
}

export const doFetch = id => fetch(`http://www.mocky.io/v2/${id}`)

export default rootSaga

