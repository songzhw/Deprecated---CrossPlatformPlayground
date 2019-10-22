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


});
