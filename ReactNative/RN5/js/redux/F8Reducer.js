import {doFetch} from "../core/HttpEngine";

export const REDUCER_F8 = "f8"

export const TRY_LOGIN = 'TRY_LOGIN'
export const tryLogin = () => ({
  type: TRY_LOGIN
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
  let {type, nextType, apiId} = action
  if (!type.startsWith(REDUCER_F8)) {
    return initState
  }
  if (type.startsWith(`${REDUCER_F8}_request_`)) {
    doFetch(apiId)
      .then(response => {
        let resp = response.json()
        let newAction = createHttpResponseAction(nextType, resp)
        dispatch(newActio)
      })
  }
  if (type.startsWith(`${REDUCER_F8}_response_`)) {

  }
}

export function createHttpAction(reducerName, startType, endType, apiId) {
  // TODO may need to add payload too
  return {
    type: `${reducerName}_request_${startType}`,
    nextType: `${reducerName}_response_${endType}`,
    apiId : apiId
  }
}

export function createHttpResponseAction(type, payload){
  return {
    type: type,
    payload: payload
  }
}

