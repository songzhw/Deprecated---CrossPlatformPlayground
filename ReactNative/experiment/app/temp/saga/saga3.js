import { take, call, put } from 'redux-saga/effects'

export function identity(value) {
  return value + 100
}

export function* inOrderSaga(x, y) {
  const action = yield take('HELLO')
  yield put({ type: 'ADD', payload: x + y })
  yield call(identity, action)
}