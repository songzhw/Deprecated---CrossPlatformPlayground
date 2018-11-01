import { takeEvery } from 'redux-saga/effects'
import {} from '../actions/currencies'
import { GET_INITIAL_CONVERSION, CHANGE_BASE_CURRENCY, SWAP_CURRENCY } from '../actions/currencies'

const fetchRates = function* (action) {
  console.log(`TODO ${action}`)
  yield
}

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchRates)
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchRates)
  yield takeEvery(SWAP_CURRENCY, fetchRates)
}

export default rootSaga