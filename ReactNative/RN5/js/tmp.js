let item = { inner: {id: 10}}
let two = {...item}
let three = Object.assign({}, item)
item.inner.id = 23
console.log(item)  //=> { inner: { id: 23 } }
console.log(two)   //=> { inner: { id: 23 } }
console.log(three)   //=> { inner: { id: 23 } }