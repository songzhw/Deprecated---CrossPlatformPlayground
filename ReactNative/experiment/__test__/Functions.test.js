import {forEachIn} from "../app/temp/Functions";

test(`test111`, () => {
  let mockCallback = jest.fn(x => x + 12)
  let arrays = [1, 3]
  forEachIn(arrays, mockCallback)

  expect(mockCallback.mock.calls.length).toBe(2)
})

