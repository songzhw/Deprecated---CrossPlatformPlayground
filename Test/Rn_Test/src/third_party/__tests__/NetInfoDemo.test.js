import React from "react";
import shallow from "enzyme/src/shallow";
import { NetInfoDemo } from "../NetInfoDemo";
import { Button } from "react-native";

test("NetInfo addListener", () => {
});

test("NetInfo fetch", () => {
  const tree = shallow(<NetInfoDemo/>);
  tree.find(Button).simulate("press");
  console.log(`state = `, tree.state("net"));
});
