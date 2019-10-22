import { shallow } from "enzyme";
import React from "react";
import { IndexLooperWrapper } from "./src/IndexLooperWrapper";

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

  // 传入index:2的props不成功, 是因为我们传递属性时只传递this.state.index, 没有管props
  test("passes in `index` props would not work", () => {
    wrapper.setProps({ index: 2 });
    expect(wrapper.state("index")).toBe(0);
  });


});
