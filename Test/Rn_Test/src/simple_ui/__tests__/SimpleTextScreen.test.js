import React from "react";
import { Text } from "react-native";
import { SimpleTextScreen } from "../SimpleTextScreen";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("simple text test", () => {
  const tree = shallow(<SimpleTextScreen/>);
  const text = tree.find(Text).render().text();
  expect(text).toBe("simple001");
});
