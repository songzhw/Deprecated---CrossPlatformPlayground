import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/Hello";

const container = document.createElement("div");
document.body.appendChild(container);

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React"/>,
  container
);