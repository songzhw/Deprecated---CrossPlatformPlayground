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
  return fetchWithPromise("szw")
    .then(data => {
      expect(data).toBe('szw')
    })
})

// be sure to return the promise
test('test async methid (failed promise)', () => {
  // expect.assertions(1)
  return fetchWithPromise_fail()
    .catch(err => {
      expect(err).toMatch('300')
    })
})