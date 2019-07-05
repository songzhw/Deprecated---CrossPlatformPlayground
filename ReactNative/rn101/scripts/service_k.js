// $ yarn run servicek --action "one work, two cats" --service "hello service"

const changeCase = require("change-case");
const replacer = require("maxstache");
var argv = require("yargs").argv; // 格式是: {_:[a,b,c], action: one, id: 20}
const mkdirp = require("mkdirp");
const fs = require("fs");

const actionFromCmd = argv.action;
const tmp = actionFromCmd.split(",");
const actionArray = tmp.map((item) => item.trim());

const serviceFromCmd = argv.service;
const serviceConstant = changeCase.constant(serviceFromCmd);

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




// ================== utils ==================
function copy(targetPath, targetFile){
  mkdirp(`./scripts/result/${targetPath}`, ()=>{
    const templateFileContent = fs.readFileSync(`${__dirname}/templatesK/${targetPath}/${targetFile}`, { encoding: "utf8" });
    fs.writeFileSync(`./scripts/result/${targetPath}/${targetFile}`, templateFileContent);

  })
}

function generate(targetPath, targetFile, placeHolder){
  mkdirp(`./scripts/result/${targetPath}`, ()=>{
    const templateFileContent = fs.readFileSync(`${__dirname}/templatesK/${targetPath}/${targetFile}`, { encoding: "utf8" });
    const newFileContent = replacer(templateFileContent, placeHolder);
    fs.writeFileSync(`./scripts/result/${targetPath}/${targetFile}`, newFileContent);

  })
}


// ================== main ==================
generate("actions", "index.ts", actionPlaceHolder);
copy("reducers",'ServiceState.ts');
generate("reducers", "index.ts", reducerPlaceHolder);
copy("configuration",'index.ts');
copy("selectors",'index.ts');
