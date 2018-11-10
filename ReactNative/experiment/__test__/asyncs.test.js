import {fetchWithCallback, fetchWithPromise} from '../app/temp/Asyncs'

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