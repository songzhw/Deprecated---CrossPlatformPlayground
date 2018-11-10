import sum from '../app/temp/Sum'

test('1 + 2 equals 3', () => {
  expect(sum(1, 2)).toBe(3)
})

// toEqual() : just check the value of an object
test(`object assignment`, () => {
  const data = {one: 1}
  data.two = 2
  expect(data).toEqual({one: 1, two: 2})
})

test('opposite of a match: 10 + 3 != 0', () => {
  let a = 10
  let b = 3
  expect(a + b).not.toBe(0)
})

test('string matches by regular expression', ()=>{
  expect('christmas').not.toMatch(/xist/)
})


// https://jestjs.io/docs/en/using-matchers