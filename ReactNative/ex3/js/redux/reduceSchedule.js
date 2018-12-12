import { GOT_DAY1, GOT_DAY2 } from './actionSchedule'

const initState = {
  day: 1,
  schedules: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case GOT_DAY1:
      const {schedules} = action.day1
      console.log(`reducer schedule = ${JSON.stringify(schedules)}`)
      return {schedules}
    case GOT_DAY2:


    default:
      return state
  }
}