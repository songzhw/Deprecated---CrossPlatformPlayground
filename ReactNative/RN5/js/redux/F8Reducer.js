export const TRY_LOGIN = 'TRY_LOGIN'
export const LOGIN_SUCC = 'LOGIN_SUCC'
export const TRY_SCHEDULE = 'TRY_SCHEDULE'
export const GOT_SCHEDULE = 'GOT_SCHEDULE'
export const TRY_FIRST_PAGE_INFO = 'TRY_FIRST_PAGE_INFO'
export const GOT_FIRST_PAGE_INFO = 'GOT_FIRST_PAGE_INFO'

const initState = {
  payload: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCC:
    case GOT_SCHEDULE:
    case GOT_FIRST_PAGE_INFO:
      let { payload } = action
      return payload
    default:
      return state
  }
}
