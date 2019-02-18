import {API_ID_LOGIN} from "../core/apiConstants";

export const REDUCER_F8 = "f8"

export const TRY_LOGIN = 'TRY_LOGIN'
export const tryLogin = () => ({
  type: TRY_LOGIN,
  nextType: LOGIN_SUCC,
  apiId: API_ID_LOGIN,
})

export const LOGIN_SUCC = 'LOGIN_SUCC'
export const loginSucc = resp => ({
  type: LOGIN_SUCC,
  ...resp
})

const initState = {
  payload: {}
}

export default (state = initState, action) => {
  console.log(`szw reducer : ${action.type}`)
  switch (action.type) {
    default:
      return state
  }
}
