import fetchA from '../app/temp/Asyncs'

test('test async method', (done) => {
  function callback(id) {
    expect(id).toBe(23)
    done()
  }

  fetchA(23, callback)
})