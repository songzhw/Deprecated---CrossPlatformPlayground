import { shallow } from "enzyme";
import React from "react";
import { IndexLooperWrapper } from "./src/IndexLooperWrapper";

// ""就是单独运行本文件
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




});
