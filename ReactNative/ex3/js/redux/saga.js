import {takeEvery, call, put} from "redux-saga/effects";
import {TRY_LOGIN, LOGIN_SUCC, loginSucc} from "./actionSession";
import {API_ID_LOGIN} from './apiConstants'

const rootSaga = function* () {
  yield takeEvery(TRY_LOGIN, tryLogin)
}

const tryLogin = function* (action) {
  try {
    const rawResp = yield call(doFetch, API_ID_LOGIN)
    const resp = yield rawResp.json()
    const newAction = loginSucc(resp)
    console.log(`saga newAction = ${JSON.stringify(newAction)}`)
    yield put(newAction)
    console.log(`saga resp = ${JSON.stringify(resp)}`)
  } catch (err) {
    console.log(`saga.tryLogin error = ${err}`)
  }
}

export const doFetch = id => fetch(`http://www.mocky.io/v2/${id}`)

export default rootSaga

