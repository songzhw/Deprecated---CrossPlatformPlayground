import React from "react";
import ReactDOM from "react-dom";
import { FormScreen } from "../FormScreen";
import { Simulate } from "react-dom/test-utils";

describe("FormScreen test", () => {
  test("01", () => {
    const container = document.createElement("div");
    ReactDOM.render(<FormScreen/>, container);

    const form = container.querySelector("form");
    Simulate.submit(form!);

    ReactDOM.unmountComponentAtNode(container);
  });
});
