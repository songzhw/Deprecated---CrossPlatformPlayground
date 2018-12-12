export const TRY_SCHEDULE_DAY1 = 'TRY_SCHEDULE_DAY1'
export const tryDay1 = () => ({
  type: TRY_SCHEDULE_DAY1
})

export const GOT_DAY1 = 'GOT_DAY1'
export const gotDay1 = resp => ({
  type: GOT_DAY1,
  ...resp
})


export const TRY_SCHEDULE_DAY2 = 'TRY_SCHEDULE_DAY2'
export const tryDay2 = () => ({
  type: TRY_SCHEDULE_DAY2
})

export const GOT_DAY2 = 'GOT_DAY2'
export const gotDay2 = resp => ({
  type: GOT_DAY2,
  ...resp
})