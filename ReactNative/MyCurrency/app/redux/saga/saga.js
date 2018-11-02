import {FETCH_CURRENCY} from "../action_currency";
import {takeEvery, put, call} from 'redux-saga/effects'

export const doFetch = currency => {
  fetch(`http://fixer.handlebarlabs.com/latest?base={currency}`)
}

const fetchRates = function* (action) {
  try{
    let {currency} = action.payload
    const resp = yield call(doFetch, currency)
    const result = yield resp.json()

    //TODO
    yield put({})

  } catch (err) {
    // TODO
  }
}

const rootSaga = function* (){
  yield takeEvery(FETCH_CURRENCY, fetchRates)
}

export default rootSaga()