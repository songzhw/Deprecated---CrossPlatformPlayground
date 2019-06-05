import React from "react";
import { say10, work10 } from "../Worker10";
import { UsingWork10Screen } from "../UsingWork10Screen";
import { Button } from "react-native";
import { shallow } from "enzyme";

jest.mock("../Worker10");

test("test exported function", () => {
  const tree = shallow(<UsingWork10Screen/>);
  tree.find(Button).simulate("press");
  expect(work10).toBeCalledWith("num10");
  expect(say10).toBeCalledWith("name");
});
