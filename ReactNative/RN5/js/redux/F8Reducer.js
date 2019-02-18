export const TRY_LOGIN = 'TRY_LOGIN'
export const LOGIN_SUCC = 'LOGIN_SUCC'
export const TRY_SCHEDULE = 'TRY_SCHEDULE'
export const GOT_SCHEDULE = 'GOT_SCHEDULE'

const initState = {
  payload: {}
}

export default (state = initState, action) => {
  console.log(`szw reducer : ${JSON.stringify(action)}`)
  switch (action.type) {
    case LOGIN_SUCC:
    case GOT_SCHEDULE:
      let { payload } = action
      return payload
    default:
      return state
  }
}
