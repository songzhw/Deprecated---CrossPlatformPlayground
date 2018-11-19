import { take, call, put } from 'redux-saga/effects'

export function* userSaga(api) {
  const action = yield take('REQUEST_USER')
  const user = yield call(api.fetchUser, action.payload)
  yield put({ type: 'RECEIVE_USER', payload: user })
}

