import {tryFetchChallenge1} from "../js/redux/saga";
import {expectSaga} from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers'
import {doFetch} from "../js/core/HttpEngine";
import {onGotChallenge1Page} from "../js/redux/reduxChanllengeOne";

test('one', () => {
  expect(1 + 1).toBe(2)
})

test('fetch code1', () => {
  const result = [{id: 23}, {id: 24}]
  const expected = onGotChallenge1Page(result)

  return expectSaga(tryFetchChallenge1, {})
    .provide([
      [matchers.call.fn(doFetch), result]
    ])
    .put(expected)
    .run()
})