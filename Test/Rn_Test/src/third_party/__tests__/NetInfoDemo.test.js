import React from "react";
import { shallow } from "enzyme";
import { NetInfoDemo } from "../NetInfoDemo";
import { Button } from "react-native";

//TODO how to test `NetInfo.addEventListener(state=>{}) ???
const wifi = { type: "wifi" };
const mobile = { type: "5G" };
let temp = wifi;

jest.mock("@react-native-community/netinfo", () => {
  return {
    fetch: jest.fn(() => new Promise((resolve, reject) => {
      resolve({ type: "wifi" });
    })),
    addEventListener: jest.fn((state) => {
      console.log(`szw listener (mock)`);
    }),
    useNetInfo: jest.fn()
  };
});

// test("NetInfo fetch", async () => {
//   const tree = shallow(<NetInfoDemo/>);
//   await tree.find(Button).simulate("press");
//   expect(tree.state("net")).toEqual({ type: "wifi" }); // toEqual用来比较对象的内容!
// });


test("NetInfo addListener", () => {
  const tree = shallow(<NetInfoDemo/>);
  tree.mount();
});
