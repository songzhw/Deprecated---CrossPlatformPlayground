import {getCurrencyRatesWhen} from './HttpEngine'

export function getRMB(base) {
  return getCurrencyRatesWhen(base)
    .then(rates => rates.CNY)
}