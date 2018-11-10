import {fetchWithCallback, fetchWithPromise} from '../app/temp/Asyncs'

test('test async method', (done) => {
  function callback(id) {
    expect(id).toBe(23)
    done()
  }

  fetchWithCallback(23, callback)
})

test('export 23', () => {
  expect(fetchWithPromise()).toBe(23)
})