import { expectSaga } from 'redux-saga-test-plan'
import saga from '../../app/redux/saga/saga'
import { FETCH_CURRENCY, FETCHED_DATA } from '../../app/redux/action_currency'

test('test fetch data', () => {
  return expectSaga(saga)
    .put({ type: FETCHED_DATA, payload: { text: 'now done' } })
    .dispatch({ type: FETCH_CURRENCY, payload: 'whatever' })
    .run()  //start the test; returns a Promise
})