/*
[usage]
yarn run add-service-actions --dest "scripts/result" --add "play music, pause music" --service "read life"
 */

const fs = require("fs");
const replacer = require("maxstache");
const changeCase = require("change-case");
const argv = require("yargs").argv; // 格式是: {_:[a,b,c], action: one, id: 20}

const argDestination = argv.dest;  //=> "./result"
const argAddedActon = argv.add;    //=> "play music, pause music"
const actionArrayFromArg = argAddedActon.split(",").map(item => item.trim());
const serviceFromCmd = argv.service;
const serviceConstant = changeCase.constant(serviceFromCmd);

// ================== 1. add actions ==================
/*
const actionFileDestination = `${argDestination}/actions/index.ts`;
const origActionFileContent = fs.readFileSync(actionFileDestination).toString();

let stringBuffer = "";
actionArrayFromArg.forEach((action) => {
  const actionConstant = changeCase.constant(action); //=> "LOAD_API"
  const actionSuffix = changeCase.path(action).toUpperCase();
  stringBuffer += `  ${actionConstant} = "@@_${serviceConstant}/${actionSuffix}",\n`;
});
stringBuffer = stringBuffer.slice(0, -1); //remove the last "\n"
let updatedActionsFileContent = origActionFileContent.replace(/(export enum ActionTypes {)/, `$1\n${stringBuffer}`);

stringBuffer = "";
let actionCreatorTemplate = `export const {{CAMEL}} = () => ({
  type: ActionTypes.{{CONSTANTS}}
 });`;
actionArrayFromArg.forEach((action) => {
  const placeHolder = {
    CAMEL: changeCase.camel(action),
    CONSTANTS: changeCase.constant(action)
  };
  stringBuffer += replacer(actionCreatorTemplate, placeHolder);
  stringBuffer += "\n\n";
});
updatedActionsFileContent += stringBuffer;

fs.writeFileSync(actionFileDestination, updatedActionsFileContent);


// ================== 2. modify reducers ==================
const reducerFileDestination = `${argDestination}/reducers/index.ts`;
const origReducerFileContent = fs.readFileSync(reducerFileDestination).toString();

stringBuffer = "";
const reduceTemplate = `  case ActionTypes.{{actionType}}: {
      const newState: ServiceState = { ...state};
      return newState;
    }

  `;
actionArrayFromArg.forEach((action) => {
  const placeHolder = { actionType: changeCase.constant(action) };
  stringBuffer += replacer(reduceTemplate, placeHolder);
});

const updatedReducersFileContent = origReducerFileContent.replace(/(switch \(action.type\) {)/, `$1\n  ${stringBuffer}`);
fs.writeFileSync(reducerFileDestination, updatedReducersFileContent);
*/

// ================== 3. modify sagas ==================



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
