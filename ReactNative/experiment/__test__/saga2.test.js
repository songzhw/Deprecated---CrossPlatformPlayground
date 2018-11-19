import { call} from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'

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
    .put({type:'RECEIVE_PET', payload:{user: fakeUser, pet: fakePet}})
    .run()
})