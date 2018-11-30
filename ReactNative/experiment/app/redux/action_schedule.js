export const FETCH_SCHEDULE = 'FETCH_CURRENCY'
export const fetchSchedule = (day) => {
  return {
    type: FETCH_SCHEDULE,
    day,
  }
}

export const GOT_SCHEDULE = 'GET_SCHEDULE'
export const gotSchedule = (data) => {
  return {
    type: GOT_SCHEDULE,
    data
  }
}