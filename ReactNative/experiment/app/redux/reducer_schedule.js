import { GOT_SCHEDULE } from './action_schedule'

const initialState = {
  schedules: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_SCHEDULE:
      console.log(`szw schedule data =     ${action.data}`)
      return { ...state, schedules: action.data }
    default:
      return state
  }
}