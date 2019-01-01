export const TRY_CHALLENGE1_PAGE = 'TRY_CHALLENGE1_PAGE'
export const fetchChallengeOnePage = (page, index) => ({
  type: TRY_CHALLENGE1_PAGE,
  page: page,
  index: index
})
// sent action:  {"type":"TRY_CHALLENGE1_PAGE","page": "http://..."}

export const GOT_CHALLENGE1_PAGE = 'GOT_CHALLENGE1_PAGE'
export const onGotChallenge1Page = (resp, index) => ({
  type: GOT_CHALLENGE1_PAGE,
  payload: resp,
  index: index
})

export const SORT_AZ = "SORT_AZ"
export const SORT_AZ_ACTION = {type: SORT_AZ}

export const SORT_ZA = "SORT_ZA"
export const SORT_ZA_ACTION = {type: SORT_ZA}

export const SORT_NONE = "SORT_NONE"
export const SORT_NONE_ACTION = {type: SORT_NONE}

var originalUsers = [];  // save the original users data
var currentIndex = 0
const initState = {payload: [], index: 0}
export default (state = initState, action) => {
  switch (action.type) {
    case GOT_CHALLENGE1_PAGE:
      let {payload, index} = action
      currentIndex = index
      originalUsers = payload
      return {payload: payload, index: currentIndex}
    case SORT_AZ:
      let usersAz = originalUsers.slice()
      usersAz.sort((a, b) => this.compareTwoStrings(a, b))
      return {payload: usersAz, index: currentIndex}
    case SORT_ZA:
      let usersZa = originalUsers.slice()
      usersZa.sort((a, b) => this.compareTwoStrings(b, a))
      return {payload: usersZa, index: currentIndex}
    case SORT_NONE:
      return {payload: originalUsers, index: currentIndex}
    default:
      return state
  }
}

this.compareTwoStrings = function (a, b) {
  if (a.last_name === null) return 1;
  if (b.last_name === null) return -1;
  return a.last_name.localeCompare(b.last_name)
}

