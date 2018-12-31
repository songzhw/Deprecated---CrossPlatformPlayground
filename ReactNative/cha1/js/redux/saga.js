import {takeEvery, call, put} from "redux-saga/effects";
import {onGotChallenge1Page, TRY_CHALLENGE1_PAGE} from "./reduxChanllengeOne";
import {API_PAGE_LIST, doFetch} from '../core/HttpEngine'
import {fetchPageList, onGotPageList, TRY_FETCH_PAGES} from "./reduxPages";

const rootSaga = function* () {
  yield takeEvery(TRY_FETCH_PAGES, tryFetchPageList)
}

export const tryFetchPageList = function* (action) {
  try{
    const rawResp = yield call(doFetch, API_PAGE_LIST)
    const resp = yield rawResp.json()
    const newAction = onGotPageList(resp)
    yield put(newAction)
  } catch(err){
    console.log(`saga tryFetchPageList error = ${JSON.stringify(err)}`)
  }
}

export const tryFetchPage1 = function* (action) {
  try {
    // TODO change the API
    const rawResp = yield call(doFetch, '5c21d5663500005900d5531c')
    const resp = yield rawResp.json()
    const newAction = onGotChallenge1Page(resp)
    yield put(newAction)
  } catch (err) {
    console.log(`saga.tryFetchChallenge1 error = ${JSON.stringify(err)}`)
  }
}


export default rootSaga

