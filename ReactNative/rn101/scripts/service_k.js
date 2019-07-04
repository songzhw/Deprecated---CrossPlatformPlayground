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

let actionTypesResult = "";
actionArray.forEach((action) => {
  const actionConstant = changeCase.constant(action); //=> "LOAD_API"
  const actionSuffix = changeCase.path(action).toUpperCase();
  actionTypesResult += `${actionConstant} = "@@_${serviceConstant}/${actionSuffix}",\n`;
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
  actionCreatorResult += "\n";
});


const actionPlaceHolder = {
  actions: actionTypesResult,
  actionCreators: actionCreatorResult
};

mkdirp("./scripts/result", () => {
  const fileContent = fs.readFileSync(`${__dirname}/templatesK/actions/index.ts`, {encoding: 'utf8'});
  console.log(fileContent)
});
