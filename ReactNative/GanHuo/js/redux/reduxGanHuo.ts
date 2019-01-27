import {IAction} from "../core/CoreProps";
import {ITodayResponse} from "../core/data/ResponseData";

export const REQUEST_TODAY = 'REQUEST_TODAY'
export const requestToday = () => ({
  type: REQUEST_TODAY,
})

export const RESPONSE_TODAY = "RESPONSE_TODAY"
export const responseToday = (resp: ITodayResponse) => ({
  type: RESPONSE_TODAY,
  payload: resp
})

const initState = {
  payload: {}
}

export default (state = initState, action: IAction) => {
  switch (action.type) {
    case RESPONSE_TODAY:
      let {payload} = action
      return payload
    default:
      return state
  }
}
