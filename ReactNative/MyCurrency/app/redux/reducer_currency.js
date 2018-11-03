import {FETCH_CURRENCY, FETCHED_DATA} from "./action_currency";

const initialState = {
  base: 'USD',
  quote: 'CAD',
  conversion: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY:
      console.log(`"reducer: fetch()`)
      return {...state, conversion: {}}
    case FETCHED_DATA:
      console.log(`reducer: onResp()`)
      return {...state }
  }
}