import React from "react";
import { shallow } from "enzyme";
import { CheckBoxDemo } from "../src/CheckBoxDemo";

test("simulate check handler", () => {
  const wrapper = shallow(<CheckBoxDemo/>);
  const checkBox = wrapper.find("input");
  expect(wrapper.state("isOn")).toBe(false);

  checkBox.simulate("change");
  expect(wrapper.state("isOn")).toBe(true);
});
