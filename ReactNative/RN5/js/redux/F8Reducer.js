export const TRY_LOGIN = 'TRY_LOGIN'
export const LOGIN_SUCC = 'LOGIN_SUCC'

const initState = {
  payload: {}
}

export default (state = initState, action) => {
  console.log(`szw reducer : ${JSON.stringify(action)}`)
  switch (action.type) {
    case LOGIN_SUCC:
      return state
      break;
    default:
      return state
  }
}
