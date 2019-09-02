import React from "react";
import { shallow } from "enzyme";
import { CarouselSlide } from "../src/CarouselSlide";

describe("CaraouselSlide", () => {
  test("renders a <figure>", () => {
    const wrapper = shallow(<CarouselSlide/>);
    expect(wrapper.type()).toBe("figure");
  });

  test("render a <image/> child", () => {
    const wrapper = shallow(<CarouselSlide/>);
    expect(wrapper.childAt(0).type()).toBe("img");
    expect(wrapper.childAt(1).type()).toBe("figcaption");
  });
});