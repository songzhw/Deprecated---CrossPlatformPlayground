import { testSaga } from 'redux-saga-test-plan'
import { identity, inOrderSaga } from '../../app/temp/saga/saga3'

test('unit test saga in particular order', () => {
  const action = { type: 'TEST' }
  testSaga(inOrderSaga, 10, 20)
    .next() //走到take, 但还没有返回
    .take('HELLO') //assert产出的是是HELLO类型
    .next(action)
    .put({type: 'ADD', payload: 30})
    .next()
    .call(identity, action) // assert the saga yields a call to 'identity' with the 'action' argument
    .next()
    .isDone() // assert the saga is finished
})