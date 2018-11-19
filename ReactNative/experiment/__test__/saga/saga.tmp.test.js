import { expectSaga } from 'redux-saga-test-plan'
import { userSaga } from '../../app/temp/saga/TempSaga'

test('01 simple saga test', () => {
  const api = {
    fetchUser: id => ({ id, name: 'song' }),
  }

  return expectSaga(userSaga, api)
    .dispatch({ type: 'REQUEST_USER', payload: { male: true, age: 23 } })
    .put({ type: 'RECEIVE_USER', payload: { id: { male: true, age: 23 }, name: 'song' } })
    .run()
})

