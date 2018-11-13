export const mockMethod = jest.fn()

const mock = jest.fn()
  .mockImplementation(() => {
    return { work: mockMethod }
  })

export default mock