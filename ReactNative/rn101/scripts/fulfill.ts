// @ts-ignore
console.log(`szw fulfill `);

const cwd = process.cwd(); //current working dict
console.log(`cwd = ${cwd}`);
//=> /Users/zsong/code/mine/CrossPlatformPlayground/ReactNative/rn101

console.log("process.argv[2...] = ", process.argv.slice(2));
const argv = require("minimist")(process.argv.slice(2));
console.dir(argv);

console.log(`length = `, argv._.length); //=> 0
console.log(argv._[0]); //=> undefined
console.log(argv.action); //=> hello
console.log(argv.i);  //=> 30
