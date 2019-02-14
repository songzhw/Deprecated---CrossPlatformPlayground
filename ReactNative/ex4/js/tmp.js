let item = {
  id: 23,
  name: 'szw',
  isMale: false
}

let r1 = item
console.log(r1 === item)  //=> true

let r2 = Object.assign({}, item, {id: 100, isMale: true})
console.log(`${JSON.stringify(r2)}`)  //=> {"id":100,"name":"szw","isMale":true}
console.log(r2 === item)  //=> false

let r3 = {...item, id: 100}
console.log(`${JSON.stringify(r3)}`)  //=> {"id":100,"name":"szw","isMale":false}
console.log(r3 === item)  //=> false

let r4 = {...item, age: 12}
console.log(r4)  //=> { id: 23, name: 'szw', isMale: false, age: 12 }
console.log(r4 === item)  //=> false
