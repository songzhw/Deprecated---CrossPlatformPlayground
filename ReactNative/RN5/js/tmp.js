let ary = [1, 2, 3];
ary.push(4);
console.log(ary); //=> 1 2 3 4
ary[0] = 4;
console.log(ary); //=> 4 2 3 4

let a = [1, 2, 3];
Array.prototype.insert = function(index, item) {
  this.splice(index, 0, item); // 第二参是说delete 0项, 即只插入
};
a.insert(0, 4)
console.log(a) //=> 4, 1, 2, 3
a.insert(0, 5)
console.log(a) //=> 5, 4, 1, 2, 3