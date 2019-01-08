import reducer, {fetchChallengeOnePage, onGotChallenge1Page, TRY_CHALLENGE1_PAGE} from "../../js/redux/reduxChanllengeOne";

test('fetch page action', () => {
  let action = fetchChallengeOnePage(1, 'b')
  expect(action).toEqual({type: TRY_CHALLENGE1_PAGE, page: 1, index: 'b'})
})

test('fetch cha1 data originally, got a non-array, should have error', () => {
  let action = onGotChallenge1Page(23, 0)
  // let newState = reducer({}, action)
  expect(reducer({}, action)).toThrow(new TypeError('CreateListFromArrayLike called on non-object'))
})

test('fetch cha1 data originally', () => {
  let action = onGotChallenge1Page([{id:1}, {id:2}], 0)
  let newState = reducer({}, action)
  expect(newState).toEqual({payload: [{id:1}, {id:2}], index: 0})
})

test('sort ascending', () => {

})

test('sort descending', () => {

})

test('clear data', () => {

})