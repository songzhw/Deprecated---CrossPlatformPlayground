/*
[usage]
yarn run add-service-actions --dest "scripts/result" --add "play music, pause music" --service "read life"
 */

const fs = require("fs");
const changeCase = require("change-case");
const argv = require("yargs").argv; // 格式是: {_:[a,b,c], action: one, id: 20}

const argDestination = argv.dest;  //=> "./result"
const argAddedActon = argv.add;    //=> "play music, pause music"
const actionArrayFromArg = argAddedActon.split(",").map(item => item.trim());
const serviceFromCmd = argv.service;
const serviceConstant = changeCase.constant(serviceFromCmd);

// ================== 1. add actions ==================
const data = fs.readFileSync(`${argDestination}/actions/index.ts`);
const OrigActionFileContent = data.toString();
let stringBuffer = "";
actionArrayFromArg.forEach((action) => {
  const actionConstant = changeCase.constant(action); //=> "LOAD_API"
  const actionSuffix = changeCase.path(action).toUpperCase();
  stringBuffer += `  ${actionConstant} = "@@_${serviceConstant}/${actionSuffix}",\n`;
});
stringBuffer = stringBuffer.slice(0, -1); //remove the last "\n"
let updatedActionsFileContent = OrigActionFileContent.replace(/(export enum ActionTypes {)/, `$1\n${stringBuffer}`);
const length = updatedActionsFileContent.length;
updatedActionsFileContent = updatedActionsFileContent.replace(/(.{length-1}/, "$1\nHELLO");
console.log(updatedActionsFileContent);


//1. fs.readFile(), 路径是project root为base dir

/*
let str = "abcdefg";
str = str.replace(/[a-c]{3}/, "XYZ");
console.log(str);  //=> XYZdefg

str = "abcdefg";
str = str.replace(/[a-c]{3}/, "$1XYZ");
console.log(str);  //=> $1XYZdefg

str = "abcdefg";
str = str.replace(/([a-c]{3})/, "$1XYZ");
console.log(str);  //=> abcXYZdefg

 */
