
export const TRY_CHALLENGE1_PAGE = 'TRY_CHALLENGE1_PAGE'
export const fetchChallengeOnePage = (page) => ({
  type: TRY_CHALLENGE1_PAGE,
  page
})

export const GOT_CHALLENGE1_PAGE = 'GOT_CHALLENGE1_PAGE'
export const onGotChallenge1Page = resp => ({
  type: GOT_CHALLENGE1_PAGE,
  payload: resp
})

const initState = {
  payload: {},
}

export default (state = initState, action) => {
  switch (action.type) {
    case GOT_CHALLENGE1_PAGE:
      let { payload } = action
      return payload
    default:
      return state
  }
}
