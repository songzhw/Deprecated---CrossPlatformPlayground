const rates = {
  CAD: 1.3184,
  CNY: 6.8292,
  EUR: 0.85955,
  JPY: 111.35
}

export function getCurrencyRatesWhen(base) {
  return new Promise((resolve, reject) => {
    resolve(rates)
  })
}