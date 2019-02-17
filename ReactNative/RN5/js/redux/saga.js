import {takeEvery, call, put} from "redux-saga/effects";
import {doFetch} from "../core/HttpEngine";
import {loginSucc, TRY_LOGIN} from "./F8Reducer";
import {API_ID_LOGIN} from "../core/apiConstants";


const rootSaga = function* () {
  yield takeEvery(TRY_LOGIN, tryLogin)
}

const tryLogin = function* (action) {
  try {
    console.log(`szw saga tryLogin()`)
    const rawResp = yield call(doFetch, API_ID_LOGIN)
    const resp = yield rawResp.json()
    const newAction = loginSucc(resp)
    yield put(newAction)
  } catch (err) {
    console.log(`saga.tryLogin error = ${err}`)
  }
}



export default rootSaga

