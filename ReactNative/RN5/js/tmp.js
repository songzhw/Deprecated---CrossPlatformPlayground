let item = {
  id: 23,
  name: 'szw',
  isMale: false
}

let two = Object.keys(item)
  .reduce((accumulatedObj, key) => {
    if(key !== 'isMale') {
      return {...accumulatedObj, [key]: item[key]}
    }
    return accumulatedObj
  }, {}) // reduce(lambda, initObject)

console.log(two)