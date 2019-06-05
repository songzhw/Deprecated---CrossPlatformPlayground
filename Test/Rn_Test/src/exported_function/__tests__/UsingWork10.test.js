import React from "react";
import { say10, work10 } from "../Worker10";
import { UsingWork10Screen } from "../UsingWork10Screen";
import { Button } from "react-native";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock("../Worker10");

test("test exported function", () => {
  const tree = shallow(<UsingWork10Screen/>);
  tree.find(Button).simulate("press");
  expect(work10).toBeCalledWith("num10");
  expect(say10).toBeCalledWith("name");
});
