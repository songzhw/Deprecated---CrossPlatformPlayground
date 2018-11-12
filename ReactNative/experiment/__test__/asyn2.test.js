jest.mock("../app/temp/module2/HttpEngine")

import {getCurrencyRatesWhen} from "../app/temp/module2/HttpEngine"

test('go to the mock folder', () => {
  return expect(getCurrencyRatesWhen('CAD'))
    .resolves
    .toBe(6.8292)
})

