import React from "react";
import { CarouselButton } from "../src/CarouselButton";
import { shallow } from "enzyme";

test("renders a <button>", () => {
  const wrapper = shallow(<CarouselButton/>);
  expect(wrapper.type()).toBe("button");
});