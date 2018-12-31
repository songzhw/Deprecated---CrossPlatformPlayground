import {takeEvery, call, put} from "redux-saga/effects";
import {onGotChallenge1Page, TRY_CHALLENGE1_PAGE} from "./reduxChanllengeOne";
import { doFetch } from '../core/HttpEngine'

const rootSaga = function* () {
  yield takeEvery(TRY_CHALLENGE1_PAGE, tryFetchChallenge1)
}

export const tryFetchChallenge1 = function* (action) {
  try{
    const rawResp = yield call(doFetch, '5c21d5663500005900d5531c')
    const resp = yield rawResp.json()
    const newAction = onGotChallenge1Page(resp)
    yield put(newAction)
  }catch (err) {
    console.log(`saga.tryFetchChallenge1 error = ${err}`)
  }
}


export default rootSaga

