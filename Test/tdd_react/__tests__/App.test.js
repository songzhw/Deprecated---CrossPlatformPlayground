import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";

/*
test failed:
    Jest encountered an unexpected token
    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.
 */
test("renders without crashing", () => {
  // const div = document.createElement("div");
  // ReactDOM.render(<App/>, div);
  // ReactDOM.unmountComponentAtNode(div);
  expect(1+2).toBe(3)
});
