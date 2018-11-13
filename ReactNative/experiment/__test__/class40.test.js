import Work from '../app/temp/class4/Worker40'
import Consumer from '../app/temp/class4/Consumer40'

const mockMethod = jest.fn()

// jest.mock(path, moduleFactory)
jest.mock('../app/temp/class4/Worker40', () => {
  return jest.fn()
    .mockImplementation(() => {
      return { work: mockMethod }
    })
})


beforeEach(() => {
  Work.mockClear()
  mockMethod.mockClear()
})


test('jest mock(path, factory)', () => {
  let consumer = new Consumer()
  consumer.workOn(444)

  //本为是说verify(worker).work(444), 现在就成了:
  expect(mockMethod).toHaveBeenCalledWith(444)
})
