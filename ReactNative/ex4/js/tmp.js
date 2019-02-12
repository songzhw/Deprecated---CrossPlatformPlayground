let ary = [1, 2, 3, 4, 5]

// slice(0,1): 只取第[0,1).   ;   slice(2), 相当于[2, end]
let result = [...ary.slice(0, 1),  ...ary.slice(2)]

console.log(ary) //=> [1,2,3,4,5]
console.log(result) //=> [1,3,4,5]

let r2 = [...ary.slice(0,1), 10, ...ary.slice(2)]
console.log(r2) //=> [ 1, 10, 3, 4, 5 ]