import React from "react";
import ReactDOM from "react-dom";
import { FormScreen } from "../FormScreen";

describe("FormScreen test", () => {
  const container = document.createElement("div");
  ReactDOM.render(<FormScreen/>, container);

  // TODO

  ReactDOM.unmountComponentAtNode(container);
});
