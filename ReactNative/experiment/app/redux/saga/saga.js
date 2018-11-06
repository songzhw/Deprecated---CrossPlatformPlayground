import {FETCH_CURRENCY, FETCHED_DATA} from "../action_currency";
import {takeEvery, put, call} from 'redux-saga/effects'

function* doIt() {
  // console.log(`saga FETCH_CURRENCY : currency = ${action.payload.thisCurrency}`)
  // console.log(`saga FETCH_CURRENCY : xin = ${action.xin}`)
  try {
    let state = yield select()
    console.log(`saga FETCH_CURRENCY : ${JSON.stringify(state)}`)
    yield put({type: FETCHED_DATA, payload: {text: 'now done'}})
  } catch(err) {
    yield put({type:FETCHED_DATA, payload: {text: `error happens ${err}`}})
  }
}

function* saga(){
  yield takeEvery(FETCH_CURRENCY, doIt)
}

export default saga

//
// export const doFetch = currency => {
//   fetch(`http://fixer.handlebarlabs.com/latest?base=${currency}`)
// }
//
// const fetchRates = function* (action) {
//   try {
//     let {currency} = action.payload
//     const resp = yield call(doFetch, currency)
//     const result = yield resp.json()
//
//     //TODO
//     yield put({type: FETCHED_DATA, payload: result})
//
//   } catch (err) {
//     // TODO
//   }
// }
//
// const rootSaga = function* () {
//   yield takeEvery(FETCH_CURRENCY, fetchRates)
//   yield takeEvery(FETCHED_DATA, fetchRates)
// }
//
// export default rootSaga()

/*
1. takeEvery()
2. put()
3. call()
4. 为何call()与resp.json()都有个yield?
*/

/*
response.json:

{
  "base": "CAD",
  "date": "2018-09-06",
  "rates": {
    "AUD": 1.0539,
    "BGN": 1.2751,
    "BRL": 3.1241,
    "CHF": 0.7351,
    "CNY": 5.18,
    "CZK": 16.766,
    "DKK": 4.8616,
    "EUR": 0.65198,
    "GBP": 0.58563,
    "HKD": 5.9541,
    "HRK": 4.8469,
    "HUF": 212.86,
    "IDR": 11295,
    "ILS": 2.7191,
    "INR": 54.582,
    "ISK": 83.322,
    "JPY": 84.463,
    "KRW": 850.67,
    "MXN": 14.582,
    "MYR": 3.1373,
    "NOK": 6.3737,
    "NZD": 1.1496,
    "PHP": 40.808,
    "PLN": 2.8154,
    "RON": 3.0242,
    "RUB": 51.881,
    "SEK": 6.9049,
    "SGD": 1.0432,
    "THB": 24.86,
    "TRY": 4.9734,
    "USD": 0.75851,
    "ZAR": 11.62
  }
}
 */