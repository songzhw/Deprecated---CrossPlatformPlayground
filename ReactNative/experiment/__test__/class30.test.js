import Worker, {mockMethod} from '../app/temp/class3/Worker30'
import Consumer from '../app/temp/class3/Consumer30'

// Worker is now a mock constructor
jest.mock('../app/temp/class3/Worker30')

beforeEach(() => {
  Worker.mockClear()
  mockMethod.mockClear()
})

test('manual mock for this', () => {
  let consumer = new Consumer()
  consumer.workLambdaOn(100)

  expect(mockMethod).toHaveBeenCalledWith(100)
})