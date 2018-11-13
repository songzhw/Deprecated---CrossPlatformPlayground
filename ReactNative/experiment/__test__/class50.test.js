import Worker from '../app/temp/class5/Worker50'
import Consumer from '../app/temp/class5/Consumer50'

jest.mock('../app/temp/class5/Worker50')

describe('[Group] when worker got error', () => {
  beforeAll(() => {
    Worker.mockImplementation(() => {
      return {
        work: () => {
          throw new Error('Error on Test')
        },
      }
    })
  })

  test('worker got error', () => {
    let consumer = new Consumer()

    expect(() => consumer.workOn(23))
      .toThrow()
  })

})
