import {getCurrencyRateToRMB} from './HttpEngine'

export function getRMB(base) {
  return getCurrencyRateToRMB(base)
    .then(rates => rates.CNY)
}