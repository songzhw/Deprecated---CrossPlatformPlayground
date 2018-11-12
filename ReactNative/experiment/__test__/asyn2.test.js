jest.mock("../app/temp/module2/HttpEngine")

import {getRMB} from "../app/temp/module2/rmb";

test('go to the mock folder', () => {
  return expect(getRMB('CAD'))
    .resolves
    .toBe(6.8292)
})

