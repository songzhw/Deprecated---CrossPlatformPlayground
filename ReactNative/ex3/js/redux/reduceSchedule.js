import { GOT_DAY1, GOT_DAY2 } from './actionSchedule'

const initState = {
  day: 1,
  schedules: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case GOT_DAY1:
      let sessions1 = action.day1.schedules
      return {sessions1}
    case GOT_DAY2:
      let sessions2 = action.day2.schedules
      return {sessions2}
    default:
      return state
  }
}