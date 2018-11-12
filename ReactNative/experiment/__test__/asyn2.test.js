jest.mock("../app/temp/module2/HttpEngine")

import {getRMB} from "../app/temp/module2/rmb";


it('go to the mock folder', () => {
  let p = getRMB('CAD')
  console.log(`000 p = ${p}`)
  return expect(p)
    .resolves
    .toBe(6.8292)
})

