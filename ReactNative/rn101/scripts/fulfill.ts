const changeCase = require("change-case");
const replacer = require("maxstache");

const argv = process.argv.slice(2);
console.log("process.argv[2...] = ", argv);






/*
const changeCase = require("change-case");
const replacer = require("maxstache");

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

const from = `this is a {{thing}} from {{world}}`;
const parts = {
  thing: "music",
  world: "canada"
};
const replacedStr = replacer(from, parts);
console.log(replacedStr); //=> this is a music from canada
*/
