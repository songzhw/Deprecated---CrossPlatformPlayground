const changeCase = require("change-case");

console.log(`szw fulfill `);

const cwd = process.cwd(); //current working dict
console.log(`cwd = ${cwd}`);
//=> /Users/zsong/code/mine/CrossPlatformPlayground/ReactNative/rn101

const argv = process.argv.slice(2);
console.log("process.argv[2...] = ", argv);
const arg = argv[0];
console.log(`kebab = ${changeCase.kebab("testString")}`);//=> test-string
console.log(`const = ${changeCase.constant(arg)}`); //=> SERVICE_DRM
console.log(`camel = ${changeCase.camel(arg)}`); //=> serviceDrm (转化后第一个一定是小写)
console.log(`pascal= ${changeCase.pascal(arg)}`); //=> ServiceDrm (转化后第一个一定是大写)

