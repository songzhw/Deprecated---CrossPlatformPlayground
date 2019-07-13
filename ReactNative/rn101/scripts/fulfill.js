/*
$ yarn run fulfill --action "one"
$ yarn run fulfill --action "one, two"
 */


/*
var fs = require("fs");
const changeCase = require("change-case");
const replacer = require("maxstache");
var argv = require("yargs").argv; // 格式是: {_:[a,b,c], action: one, id: 20}
const mkdirp = require("mkdirp");

const actionFromCmd = argv.action; //=> "one"
const actions = actionFromCmd.split(","); //=> ["one"]
const action = actions[0].trim();

// __dirname;     //=> /Users/zsong/code/mine/CrossPlatformPlayground/ReactNative/rn101/scripts
// process.cwd(); //=> /Users/zsong/code/mine/CrossPlatformPlayground/ReactNative/rn101


// TODO : odd, I will get an "unexpected token :" error every time I try to add types to "error" or "files"
const placeHolder = {
  constants: changeCase.constant(action),
  pascal: changeCase.pascal(action)
};

mkdirp("./scripts/result", () => {
  fs.readdir(`${__dirname}/templates1`, (error, files) => {
    console.log(files); //=> ['reducer.ts']
    files.forEach(file => {
      const filePath = `${__dirname}/templates1/${file}`;
      fs.readFile(filePath, "utf8", (err, str) => {
        const after = replacer(str, placeHolder);
        // "."是工程的根目录. 即最终会是rn101/scripts/result
        fs.writeFile(`./scripts/result/${file}`, after, err3 => {
          console.log(err3);
        });
      });
    });
  });
});
*/



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