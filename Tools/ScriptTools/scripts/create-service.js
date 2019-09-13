// $ yarn run create-service --action "set progress, post progress, clear progress" --service "play music"
// $ yarn run create-service --action "set progress, post progress, clear progress" --service "play music" --network
// $ yarn run create-service --action "set progress, post progress, clear progress" --selector getMusic --service "play music" --network

const changeCase = require("change-case");
const replacer = require("maxstache");
const argv = require("yargs").argv; // 格式是: {_:[a,b,c], action: one, id: 20}
const mkdirp = require("mkdirp");
const fs = require("fs");

const actionFromCmd = argv.action;
const tmp = actionFromCmd.split(",");
const actionArray = tmp.map((item) => item.trim());

const serviceFromCmd = argv.service;
const serviceConstant = changeCase.constant(serviceFromCmd);
const isRequiredNetwork = argv.network;


// ================== 1. generate actions ==================
let actionTypesResult = "";
actionArray.forEach((action) => {
  const actionConstant = changeCase.constant(action); //=> "LOAD_API"
  const actionSuffix = changeCase.path(action).toUpperCase();
  actionTypesResult += `  ${actionConstant} = "@@_${serviceConstant}/${actionSuffix}",\n`;
});
actionTypesResult = actionTypesResult.substring(0, actionTypesResult.length - 2); //去除最后一个逗号与'\n'

let actionCreatorResult = "";
let actionCreatorTemplate = `export const {{CAMEL}} = () => ({
  type: ActionTypes.{{CONSTANTS}}
 });`;
actionArray.forEach((action) => {
  const placeHolder = {
    CAMEL: changeCase.camel(action),
    CONSTANTS: changeCase.constant(action)
  };
  actionCreatorResult += replacer(actionCreatorTemplate, placeHolder);
  actionCreatorResult += "\n\n";
});


const actionPlaceHolder = {
  actions: actionTypesResult,
  actionCreators: actionCreatorResult
};


// ================== 2. generate reducer ==================
let reducerCode = "";
const reduceTemplate = `case ActionTypes.{{actionType}}: {
    const newState: ServiceState = { ...state};
    return newState;
  }
  
  `;
actionArray.forEach((action) => {
  const placeHolder = { actionType: changeCase.constant(action) };
  reducerCode += replacer(reduceTemplate, placeHolder);
});

const serviceCamel = changeCase.constant(serviceFromCmd);
const reducerPlaceHolder = {
  serviceCamel: serviceCamel,
  reducerCases: reducerCode
};

// ================== 3. generate sagas ==================
let sagaRegister = "";
let sagaMethods = "";
actionArray.forEach((action) => {
  const actionConstant = changeCase.constant(action); //=> "LOAD_API"
  const sagaMethod = changeCase.camel(action);
  sagaRegister += `  yield takeEvery(ActionTypes.${actionConstant}, ${sagaMethod});\n`;
  sagaMethods += `const ${sagaMethod} = function*(action: AnyAction) {\n\n};\n`;
});
sagaRegister = sagaRegister.substring(0, sagaRegister.length - 1);

const sagaPlaceHolder = {
  actionSagas: sagaMethods,
  actioRegister: sagaRegister
};


// ================== 4. generate selectors ==================
const selectorFromCmd = argv.selector;
const selector = selectorFromCmd ? selectorFromCmd : "getBook";
const selectorPlaceHolder = {
  selectorName: selector
};

// ================== index.ts ==================
let allActionCreatorNames = "";
actionArray.forEach((action) => {
  allActionCreatorNames += `  ${changeCase.camel(action)},\n`;
});
allActionCreatorNames = allActionCreatorNames.substring(0, allActionCreatorNames.length - 2);
const selectorPart = selectorFromCmd ? `export { ${selectorFromCmd} } from "./selectors"` : "";
const allActionCreatorPlaceHolder = {
  service: `${changeCase.pascal(selectorFromCmd)}`,
  actions: allActionCreatorNames,
  sagaName: `${changeCase.pascal(serviceFromCmd)}Saga`,
  selectorName: selectorPart
};


// ================== package.json ==================
console.log(`is? = `, isRequiredNetwork);
const networkCode = isRequiredNetwork ? `    "@kobo/api-onestore-kobo": "0.1.1",\n` : "";
const packagePlaceHolder = {
  service: changeCase.param(serviceFromCmd),
  network: networkCode
};


// ================== utils ==================
const templatesFolderHost = `${__dirname}/templates/service`;

function copy(targetPath, targetFile) {
  mkdirp(`./scripts/result/${targetPath}`, () => {
    const templateFileContent = fs.readFileSync(`${templatesFolderHost}/${targetPath}/${targetFile}`, { encoding: "utf8" });
    fs.writeFileSync(`./scripts/result/${targetPath}/${targetFile}`, templateFileContent);

  });
}

function generate(targetPath, targetFile, placeHolder) {
  mkdirp(`./scripts/result/${targetPath}`, () => {
    const templateFileContent = fs.readFileSync(`${templatesFolderHost}/${targetPath}/${targetFile}`, { encoding: "utf8" });
    const newFileContent = replacer(templateFileContent, placeHolder);
    fs.writeFileSync(`./scripts/result/${targetPath}/${targetFile}`, newFileContent);

  });
}

// ================== main ==================
generate("actions", "index.ts", actionPlaceHolder);
copy("reducers", "ServiceState.ts");
generate("reducers", "index.ts", reducerPlaceHolder);
generate("sagas", "index.ts", sagaPlaceHolder);
copy("configuration", "index.ts");
generate("selectors", "index.ts", selectorPlaceHolder);
generate("", "index.ts", allActionCreatorPlaceHolder);
generate("", "package.json", packagePlaceHolder);


