import React from "react";
import { shallow } from "enzyme";
import { NetInfoDemo } from "../NetInfoDemo";
import { Button } from "react-native";

jest.mock("@react-native-community/netinfo", () => {
  return {
    fetch: jest.fn(() => Promise.resolve("11")),
    addEventListener: jest.fn(),
    useNetInfo: jest.fn()
  };
});

test("NetInfo addListener", () => {
});

test("NetInfo fetch", () => {
  const tree = shallow(<NetInfoDemo/>);
  tree.find(Button).simulate("press");
  console.log(`state = `, tree.state("net"));
});
