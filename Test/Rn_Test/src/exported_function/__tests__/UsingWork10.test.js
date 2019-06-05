import React from "react";
import { work10 } from "../Worker10";
import { shallow } from "react-native/jest/renderer";
import { UsingWork10Screen } from "../UsingWork10Screen";

jest.mock("../Worker10");

test("test exported function", () => {
  work10.mockReturnThis();

  const tree = shallow(<UsingWork10Screen/>);
  tree.find("Button").simulate("press");

});
