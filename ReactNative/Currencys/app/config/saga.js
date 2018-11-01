import { takeEvery, call, put, select } from 'redux-saga/effects'
import {
  GET_INITIAL_CONVERSION,
  CHANGE_BASE_CURRENCY,
  SWAP_CURRENCY,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies'

export const doFetch = currency => fetch(`http://fixer.handlebarlabs.com/latest?base=${currency}`)

const fetchRates = function* (action) {
  try {
  
  } catch (error) {
    yield put({ type: CONVERSION_ERROR, error: error.message })
  }
  yield
}

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchRates)
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchRates)
  yield takeEvery(SWAP_CURRENCY, fetchRates)
}

export default rootSaga