import Worker from   '../app/temp/class1/Worker10'
import Consumer from '../app/temp/class1/Consumer10'

// Worker is now a mock constructor
jest.mock( '../app/temp/class1/Worker10')

beforeEach(() => {
  // clear all instance and calls to all methods
  Worker.mockClear()
})

// 这里和java有何不同? (:js中"类"也是方法, 所以这里可以verify)
test('check if consumer called workder', () => {
  let consuemr = new Consumer()
  expect(Worker).toHaveBeenCalledTimes(1) // 在CF中, 被new了
})

