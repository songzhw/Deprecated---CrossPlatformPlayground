import {FETCH_CURRENCY, FETCHED_DATA} from "./action_currency";

const initialState = {
  base: 'USD',
  quote: 'CAD',
  conversion: {},
  error: null,
  payload: {newText: 'default from reducer'}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY:
      console.log(`reducer FETCH_CURRENCY : currency = ${action.payload.thisCurrency}`)
      return {...state, xin: 200, conversion: {}}
    case FETCHED_DATA:
      console.log(`reducer FETCHED_DATA : ${action.payload.text}`)
      return {...state, payload: {newText: action.payload.text} }
    default:
      return state  // need this empty object, so ReduxSagaScreen would show "default value"
  }
}