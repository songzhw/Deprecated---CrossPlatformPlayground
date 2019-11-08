import React from "react";
import { shallow } from "enzyme";
import { NetInfoDemo } from "../NetInfoDemo";
import { Button } from "react-native";

jest.mock("@react-native-community/netinfo", () => {
  return {
    fetch: jest.fn(() => new Promise((resolve, reject) => {
      resolve({ type: "wifi" });
    })),
    addEventListener: jest.fn(),
    useNetInfo: jest.fn()
  };
});

test("NetInfo addListener", () => {
});

test("NetInfo fetch", async () => {
  const tree = shallow(<NetInfoDemo/>);
  await tree.find(Button).simulate("press");
  expect(tree.state("net")).toEqual({ type: "wifi" }); // toEqual用来比较对象的内容!
});
