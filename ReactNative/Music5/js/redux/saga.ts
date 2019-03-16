import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_RECOMMEND_HOME, onFetchedRecommendHome } from "./reduxRecommend";
import { API_RECOMMEND_HOME, doFetch } from "../core/httpEngine";


const rootSaga = function* () {
  yield takeEvery(FETCH_RECOMMEND_HOME, fetchRecommendHome);
};

const fetchRecommendHome = function* () {
  try {
    const rawResp1 = yield call(doFetch, API_RECOMMEND_HOME);
    const resp1 = yield rawResp1.json();
    console.log(`szw saga resp = ${resp1}`)
    const newAction = onFetchedRecommendHome(resp1);
    yield put(newAction);
  } catch (err) {
    console.log(`szw saga.fetch schedule error = ${err}`);
  }
};

export default rootSaga;