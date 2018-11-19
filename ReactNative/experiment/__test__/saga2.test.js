import { call } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'

import { api } from '../app/temp/saga/api'
import { petSaga } from '../app/temp/saga/saga2'



test('02 mock', () => {
  const fakeUser = { id: 11, name: 'jim', petId: 122 }
  const fakePet = { name: 'goody' }

  return expectSaga(petSaga)
    .dispatch({ type: 'REQUEST_PET', payload: 999 })
    .provide([
      [call(api.fetchUser, 999), fakeUser],
      [matchers.call.fn(api.fetchPet), fakePet],
    ])
    .put({ type: 'RECEIVE_PET', payload: { user: fakeUser, pet: fakePet } })
    .run()
})

test('03 handle errors', () => {
  const error = new Error('error')
  return expectSaga(petSaga)
    .dispatch({ type: 'REQUEST_PET', payload: 888 })
    .provide([
      [matchers.call.fn(api.fetchUser), throwError(error)],
    ])
    .put({ type: 'FAIL_FETCH', error })
    .run()
})