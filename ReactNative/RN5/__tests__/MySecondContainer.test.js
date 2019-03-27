import React from "react";
import { Text, Button, Image } from "react-native";
import { shallow } from "enzyme";
import MySecondContainer from "../js/screen/for_test/two/MySecondContainer";
import MyButton from "../js/screen/for_test/two/MyButton";

describe("the two feasible test approach when simulating deep-level click event", () => {
  test("simulate click1", () => {
    const func = jest.fn();
    const wrapper = shallow(
      <MySecondContainer
        onPress={func}
      />
    );

    // 可行的测试方法1
    const clickReceiver = wrapper.find(MyButton)
    clickReceiver.simulate("press");
    expect(func).toBeCalled();
  });

  test("simulate click2", () => {
    const func = jest.fn();
    const wrapper = shallow(
      <MySecondContainer
        onPress={func}
      />
    );

    // 可行的测试方法2
    const target = wrapper.findWhere(item => item.prop("onPress") !== undefined);
    expect(target.prop("onPress")).toBe(func);

  });

});

/*
console.log(wrapper.debug())的结果:

      <MyButtonContainer>
        <MyButton title="Inner2" onPress={[Function: mockConstructor]} />
      </MyButtonContainer>

 */

/*
下面的测试是失败的:
    wrapper.simulate("press");
    expect(func).toBeCalled();

可见simulate(event)只能传递一层

 */
