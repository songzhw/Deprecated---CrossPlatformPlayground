import { call, put, take } from 'redux-saga/effects'
import {api} from './api'

export function* petSaga() {
  try {
    const action = yield take('REQUEST_PET')
    const user = yield call(api.fetchUser, action.payload)
    const pet = yield call(api.fetchPet, user.petId)

    yield put({ type: 'RECEIVE_PET', payload: { user, pet } })
  } catch (err) {
    yield put({ type: 'FAIL_FETCH', error: err })
  }
}