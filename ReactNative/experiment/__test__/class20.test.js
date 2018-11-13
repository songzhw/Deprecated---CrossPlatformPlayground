import Worker from   '../app/temp/class2/Worker20'
import Consumer from '../app/temp/class2/Consumer20'

// Worker is now a mock constructor
jest.mock( '../app/temp/class2/Worker20')

beforeEach(() => {
  Worker.mockClear()
})

test('could lambda be verified?', ()=> {
  let consumer = new Consumer()
  consumer.workLambdaOn(100)

  let mockWorker = Worker.mock.instances[0]
  let mockMethod = mockWorker.work

  expect(mockMethod).toBeCalled()
})