import {call, put, takeEvery} from "redux-saga/effects";
import {gotFirstPageInfo, TRY_FIRST_PAGE_INFO} from "./reducerFirst";
import {API_FIRST_PAGE, doFetch} from "../core/HttpEngine";


const rootSaga = function* () {
  yield takeEvery(TRY_FIRST_PAGE_INFO, fetchFirstPage)
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

export default rootSaga