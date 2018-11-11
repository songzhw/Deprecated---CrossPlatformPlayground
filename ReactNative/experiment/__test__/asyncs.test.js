import {
  fetchWithCallback, fetchWithPromise, fetchWithPromise_fail
} from '../app/temp/Asyncs'

test('test async method (callback)', (done) => {
  function callback(id) {
    expect(id).toBe(23)
    done()
  }

  fetchWithCallback(23, callback)
})

// be sure to return the promise
test('test async method (promise)', () => {
  // 以下两种方式都行

  // return fetchWithPromise("szw")
  //   .then(data => {
  //     expect(data).toBe('szw')
  //   })

  return expect(fetchWithPromise('szw'))
    .resolves
    .toBe('szw')
})

// be sure to return the promise
test('test async methid (failed promise)', () => {
  let error = new Error("failed 400")
  return expect(fetchWithPromise_fail())
    .rejects
    .toEqual(error)
})

test('test prmise with async', async () => {
  const data = await fetchWithPromise('xl')
  expect(data).toBe('xl')
})

test('test promise with async 2', async () => {
  await expect(fetchWithPromise('bing'))
    .resolves
    .toBe('bing')
})