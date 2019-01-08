import reducer, {fetchChallengeOnePage, onGotChallenge1Page, TRY_CHALLENGE1_PAGE} from "../../js/redux/reduxChanllengeOne";

test('fetch page action', () => {
  let action = fetchChallengeOnePage(1, 'b')
  expect(action).toEqual({type: TRY_CHALLENGE1_PAGE, page: 1, index: 'b'})
})

test('fetch cha1 data originally', () => {
  let action = onGotChallenge1Page(23, 0)
  let newState = reducer({}, action)
  expect(newState).toEqual({payload: 23, index: 0})
})

test('sort ascending', () => {

})

test('sort descending', () => {

})

test('clear data', () => {

})