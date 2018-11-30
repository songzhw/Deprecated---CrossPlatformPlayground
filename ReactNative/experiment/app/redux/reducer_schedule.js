import {GOT_SCHEDULE} from './action_schedule'

export default (state = {}, action) => {
  switch(action.type){
    case GOT_SCHEDULE:
      return { ...state, schedules: action.data}
  }
}