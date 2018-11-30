import {GOT_SCHEDULE} from './action_schedule'

export default (state = {}, action) => {
  switch(action.type){
    case GOT_SCHEDULE:
      console.log(`szw schedule data =     ${action.data}`)
      return { ...state, schedules: action.data}
    default:
      return state
  }
}