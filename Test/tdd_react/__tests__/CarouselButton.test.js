import React from "react";
import { CarouselButton } from "../src/CarouselButton";
import { shallow } from "enzyme";

describe("CaraouselButton", () => {
  test("renders a <button>", () => {
    const wrapper = shallow(<CarouselButton/>);
    expect(wrapper.type()).toBe("button");
  });

  test("passes 'children' throught the <button>", () => {
    const text = "hello world";
    const wrapper = shallow(<CarouselButton>text</CarouselButton>);
    expect(wrapper.prop("children")).toBe(text);
  });
});