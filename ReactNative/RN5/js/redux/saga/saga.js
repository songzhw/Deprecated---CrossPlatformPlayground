import { takeEvery, call, put } from "redux-saga/effects";
import { GOT_SCHEDULE, TRY_SCHEDULE } from "../F8Reducer";
import { axios } from "../../core/HttpEngine";
import { API_ID_DAY1, API_ID_DAY2 } from "../../core/apiConstants";

const rootSaga = function* () {
  yield takeEvery(TRY_SCHEDULE, fetchSchedules);
};

const fetchSchedules = function* (action) {
  try {
    const resp1 = yield call(axios.get, API_ID_DAY1);
    const day1 = resp1.data;
    const resp2 = yield call(axios.get, API_ID_DAY2);
    const day2 = resp2.data;
    const newAction = {
      type: GOT_SCHEDULE,
      payload: { day1, day2 }
    };
    yield put(newAction);
  } catch (err) {
    console.log(`saga.fetch schedule ERROR = ${err}`);
  }
};

export default rootSaga;

