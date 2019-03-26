import React from "react";
import { Text, Button, Image } from "react-native";
import { shallow } from "enzyme";
import MySecondContainer from "../js/screen/for_test/two/MySecondContainer";

describe("second", () => {
  test("simulate click", () => {
    const func = jest.fn();
    const wrapper = shallow(
      <MySecondContainer
        onPress={func}
      />
    );
    wrapper.simulate("press");
    expect(func).toBeCalled();
  });
});
