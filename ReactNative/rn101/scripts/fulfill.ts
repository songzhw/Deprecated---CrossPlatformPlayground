var fs = require("fs");
const changeCase = require("change-case");
const replacer = require("maxstache");
var argv = require("yargs").argv; // 格式是: {_:[a,b,c], action: one, id: 20}
const mkdirp = require("mkdirp");

const actionFromCmd = argv.action;
const actions = actionFromCmd.split(",");
const action = actions[1].trim();

console.log(__dirname);     //=> /Users/zsong/code/mine/CrossPlatformPlayground/ReactNative/rn101/scripts
console.log(process.cwd()); //=> /Users/zsong/code/mine/CrossPlatformPlayground/ReactNative/rn101


// TODO : odd, I will get an "unexpected token :" error every time I try to add types to "error" or "files"
const placeHolder = {
  constants: changeCase.constant(action),
  pascal: changeCase.pascal(action)
};

mkdirp("./apple/book/country", error => {
  fs.readdir(`${__dirname}/templates`, (error, files) => {
    console.log(files); //=> ['reducer.ts']
    files.forEach(file => {
      const filePath = `${__dirname}/templates/${file}`;
      fs.readFile(filePath, "utf8", (err, str) => {
        const after = replacer(str, placeHolder);

        });
      });
    });
  });
});


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
