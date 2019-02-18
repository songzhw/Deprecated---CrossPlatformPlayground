export const TRY_LOGIN = 'TRY_LOGIN'
export const LOGIN_SUCC = 'LOGIN_SUCC'

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
