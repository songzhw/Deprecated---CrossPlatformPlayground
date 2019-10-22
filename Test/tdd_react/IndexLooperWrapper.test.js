import { shallow } from "enzyme";
import React from "react";
import { IndexLooperWrapper } from "./src/IndexLooperWrapper";

// "jest IndexLooperWrapper.test.js"就是单独运行本文件
describe("[HoC] IndexLooperWrapper", () => {
  const MockComponent = () => null;
  MockComponent.displayName = "MockComponent";
  // 注意, 得大写, 不然无法用于<Hoc>
  const Hoc = IndexLooperWrapper(MockComponent, "index");

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Hoc/>);
  });

  test("has initial `index` state equal to 0", () => {
    expect(wrapper.state("index")).toBe(0);
  });

  // 传入index:2的props, 但props改变引起InComponent重渲染, index又成了state.index了
  test("passes in `index` props would not work", () => {
    wrapper.setProps({ index: 2 });
    expect(wrapper.state("index")).toBe(0);
  });

  // test("calls `onIndexChange` on decrement", () => {
  test("has the max index state on decrement from 0", () => {
    const onIndexChange = jest.fn();
    wrapper.prop("indexDecrement")(3);
    expect(wrapper.state("index")).toBe(2); //0再prev, 就到了2了
  });

  // test("calls `onIndexChange` on increment", () => {
  test("has the min index state on increment from the max", () => {
    wrapper.setState({ index: 2 });
    const onIndexChange = jest.fn();
    wrapper.prop("indexIncrement")(3);
    expect(wrapper.state("index")).toBe(0); //0再prev, 就到了2了
  });

});
