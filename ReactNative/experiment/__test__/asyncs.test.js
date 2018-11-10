import fetchWithCallback from '../app/temp/Asyncs'

test('test async method', () => {
  function callback(id) {
    expect(id).toBe(23)
  }

  fetchWithCallback(21, callback)
})