

const getTypeOf = (obj) => {
  let toStringMethod = Object.prototype.toString
  let map = {
    '[object Array]': 'array',
    '[object Object]': 'object'
  }

  return map[toStringMethod.call(obj)]
}

const deepClone = (data) => {
  let ret
  let type = getTypeOf(data)

  if (type === 'array') {
    ret = []
    for (let i = 0; i < data.length; i++) {
      ret.push(deepClone(data[i]))
    }
    return ret
  } else if (type === 'object') {
    ret = {}
    for (i in data) {
      ret[i] = deepClone(data[i])
    }
    return ret
  } else { //基本类型
    return data
  }
}

// = = = = = = = = = = = = = = = = = = = = = = = =

let item = {
  id: 23,
  name: {
    first: 'first',
    last: 'second'
  },
  education: ['one', {two: 'two'}, true],
  isMale: true
}

// let two = deepClone(item)
// item.name.first = 'zw'
// item.education = [1, 2, 3]
// console.log(item)
// console.log(two)
/*
item = { id: 23,
  name: { first: 'zw', last: 'second' },
  education: [ 1, 2, 3 ],
  isMale: true }

two = { id: 23,
  name: { first: 'first', last: 'second' },
  education: [ 'one', { two: 'two' }, true ],
  isMale: true }

 */

// = = = = = = = = = = = = = = = = = = = = = = = =

let three = JSON.parse(JSON.stringify(item))
item.name.first = 'zw'
item.education = [1, 2, 3]
console.log(item)
console.log(three)