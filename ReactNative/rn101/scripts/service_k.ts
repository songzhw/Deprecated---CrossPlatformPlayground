// $ yarn run servicek --action "one work, two cats" --service "hello service"

const changeCase = require("change-case");
const replacer = require("maxstache");
var argv = require("yargs").argv; // 格式是: {_:[a,b,c], action: one, id: 20}
const mkdirp = require("mkdirp");

const actionFromCmd = argv.action;
const tmp = actionFromCmd.split(",");
const actionArray = tmp.map((item: string) => item.trim());

const serviceFromCmd = argv.service;
const serviceConstant = changeCase.constant(serviceFromCmd);

let actionsResult = "";
actionArray.forEach((action: string) => {
  const actionConstant = changeCase.constant(action); //=> "LOAD_API"
  const actionSuffix = changeCase.path(action).toUpperCase();
  actionsResult += `${actionConstant} = "@@_${serviceConstant}/${actionSuffix}"\n,`;
});
actionsResult = actionsResult.substring(0, actionsResult.length - 1); //去除最后一个逗号

console.log(actionsResult);
