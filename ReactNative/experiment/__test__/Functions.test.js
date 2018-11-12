import {forEachIn} from "../app/temp/module1/Functions";

test(`test function arguments`, () => {
  let mockCallback = jest.fn(x => x + 12)
  let arrays = [1, 3]
  forEachIn(arrays, mockCallback)

  // *.mock.calls的结果是:  [[1],[3]]. 其calls[0]是[1], calls[1]是[3],
  expect(mockCallback.mock.calls.length).toBe(2)
  expect(mockCallback.mock.calls[1][0]).toBe(3)

  // *.mock.results[1]的值是:  {"isThrow": false, "value": 15}
  expect(mockCallback.mock.results[1].value).toBe(15)
})

test('test .mock.instance', () => {
  const MyMock = jest.fn()
  const a = new MyMock()
  //=>  MyMock.mock.instances : [{}]
  console.log(`01 : ${MyMock.mock.instances[0].name}`)

  const b = {}
  const bound = MyMock.bind(b)
  bound()
  //=> MyMock.mock.instances : [{}, {}]
  console.log(`02 : ${MyMock.mock.instances[0].name}`)
  console.log(`03 : ${MyMock.mock.instances[1].name}`)
})

// 其实用 fn.test( x => x + 12)也是写明了mock returned value
test('mock returned value', () => {
  const myMock = jest.fn();
  console.log(myMock());  //=> undefined

  myMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true);

  console.log(myMock(), myMock(), myMock(), myMock());//=> 10, 'x', true, true
})

// verify() ==> expect(mockFun).toBeCalledWith(arg1, arg2)
