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


// ================== 3. modify sagas ==================
const sagaFileDestination = `${argDestination}/sagas/index.ts`;
const origSagaFileContent = fs.readFileSync(sagaFileDestination).toString();

let sagaRegister = "";
let sagaMethods = "";
actionArrayFromArg.forEach((action) => {
  const actionConstant = changeCase.constant(action);
  const sagaMethod = changeCase.camel(action);
  sagaRegister += `  yield takeEvery(ActionTypes.${actionConstant}, ${sagaMethod});\n`;
  sagaMethods += `const ${sagaMethod} = function* (action: AnyAction) {\n\n};\n`;
});
sagaRegister = sagaRegister.slice(0, -1);

const addedSagaCode = `${sagaMethods}\n$2\n${sagaRegister}`;
let updatedSagaFileContent = origSagaFileContent.replace(/(\n)(const saga = function\* \(\) {)/, addedSagaCode);

fs.writeFileSync(sagaFileDestination, updatedSagaFileContent);

/*
[经验]
1. fs.readFile(), 路径是project root为base dir
 */

