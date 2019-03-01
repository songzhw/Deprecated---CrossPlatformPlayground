import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import saga from "../js/redux/saga";
import { GOT_SCHEDULE, TRY_SCHEDULE } from "../js/redux/F8Reducer";
import { axios } from "../js/core/HttpEngine";
import { API_ID_DAY1, API_ID_DAY2 } from "../js/core/apiConstants";

test("fetch schdules", () => {
  // jest.setTimeout(300000);
  // expectSaga.DEFAULT_TIMEOUT = 300000;
  return expectSaga(saga)
    .dispatch({ type: TRY_SCHEDULE })
    .provide([
      [call(axios.get, API_ID_DAY1), { data: { r1: "r1" } }],
      [call(axios.get, API_ID_DAY2), { data: { r3: "r3" } }]
      // [matchers.call.fn(axios.get), { data: { r1: "r1" } }],
    ])
    .put({
      type: GOT_SCHEDULE,
      payload: { day1: { r1: "r1" }, day2: { r3: "r3" } }
    })
    .run();
});