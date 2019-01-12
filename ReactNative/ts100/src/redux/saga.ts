import {call, put, takeEvery} from "redux-saga/effects";
import {gotFirstPageInfo, TRY_FIRST_PAGE_INFO} from "./reducerFirst";
import {API_FIRST_PAGE, API_ID_LOGIN, doFetch} from "../core/HttpEngine";
import {loginSucc, TRY_LOGIN} from "./reducerLogin";


const rootSaga = function* () {
  yield takeEvery(TRY_FIRST_PAGE_INFO, fetchFirstPage)
  yield takeEvery(TRY_LOGIN, tryLogin)
}

const fetchFirstPage = function* () {
  try {
    const rawResp = yield call(doFetch, API_FIRST_PAGE)
    const resp = yield rawResp.json()
    const newAction = gotFirstPageInfo(resp)
    yield put(newAction)
  } catch (err) {
    console.log(`saga.tryGetFirstPageInfo error = ${err}`)
  }
}

const tryLogin = function* () {
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