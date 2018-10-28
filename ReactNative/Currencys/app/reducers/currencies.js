import { CHANGE_CURRENCY_AMOUNT, changeCurrencyAmount, SWAP_CURRENCY, swapCurrency } from '../actions/currencies'

const initialState = {
  baseCurrency: 'CAD',
  quoteCurrency: 'RMB',
  amount: 100,
  error: null,
  converions: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return { ...state, amount: action.amount || 0 }
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      }
    default:
      return state
  }
}
