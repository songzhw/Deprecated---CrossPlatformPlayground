import {getUserName} from "../app/temp/module1/Functions"
import Worker from '../app/temp/module1/OneModule'

// mock a module
jest.mock('../app/temp/OneModule')

test('test module', () => {
  const resp = {id: 100, name: 'xl'}
  Worker.fetchUser.mockResolvedValue(resp)

  return getUserName()
    .then(name => {
      expect(name).toEqual('xl')
    })
})