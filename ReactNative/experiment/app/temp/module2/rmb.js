import {getCurrencyRateToRMB} from './HttpEngine'

export function getRMB(base) {
  return getCurrencyRateToRMB('USD')
    .then(rates => rates.CNY)
}