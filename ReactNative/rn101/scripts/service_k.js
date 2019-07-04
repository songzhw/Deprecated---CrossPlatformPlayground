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

mkdirp("./scripts/result/actions", () => {
  const fileContent = fs.readFileSync(`${__dirname}/templatesK/actions/index.ts`, { encoding: "utf8" });
  const newFileContent = replacer(fileContent, actionPlaceHolder);
  fs.writeFileSync("./scripts/result/actions/index.ts", newFileContent);
});

// ================== 2. generate reducer ==================
mkdirp("./scripts/result/reducers", () => {
  const fileContent = fs.readFileSync(`${__dirname}/templatesK/reducers/ServiceState.ts`, { encoding: "utf8" });
  fs.writeFileSync("./scripts/result/reducers/ServiceState.ts", fileContent);
})
