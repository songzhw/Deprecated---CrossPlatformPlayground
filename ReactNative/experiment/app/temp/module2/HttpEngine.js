// 注意一是要用json(), 而不是json. 二是这返回的仍是一具Promise
export function getCurrencyRatesWhen(base) {
  console.log(`0001 real`)
  let url = `http://fixer.handlebarlabs.com/latest?base=${base}`
  return fetch(url)
    .then(resp => resp.json())
    .then(respJson => respJson.rates)
}
