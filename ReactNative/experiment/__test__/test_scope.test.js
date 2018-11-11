import sum from '../app/temp/Sum'

beforeAll( () => {
  console.log(`before all`)
})

beforeEach( () => {
  console.log(`before`)
})

afterEach( () => {
  console.log(`after`)
})

test('1 + 2 equals 3', () => {
  expect(sum(1, 2)).toBe(3)
})

describe('group 02', ()=> {
  beforeEach( () => {
    console.log(`Group before`)
  })

  test('2 + 2 equals 4', () => {
    expect(sum(2, 2)).toBe(4)
  })

  test('3 + 2 equals 5', () => {
    expect(sum(3, 2)).toBe(5)
  })
})