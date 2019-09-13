/*
[usage]
yarn run add-service-actions --dest "./result" --add "play music, pause music"
 */

const fs = require("fs");
const changeCase = require("change-case");
const argv = require("yargs").argv; // 格式是: {_:[a,b,c], action: one, id: 20}

const argDestination = argv.dest;  //=> "./result"
const argAddedActon = argv.add;    //=> "play music, pause music"
const actionArrayFromArg = argAddedActon.split(",").map(item => item.trim());
