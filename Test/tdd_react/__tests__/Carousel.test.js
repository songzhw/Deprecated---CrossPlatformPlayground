import { shallow } from "enzyme";
import React from "react";
import { Carousel } from "../src/Carousel";

describe("Carousel", () => {
  test("has slide and button children", () => {
    const wrapper = shallow(<Carousel/>);
    expect(wrapper.childAt(0).type()).toBe("CarouselSlide");
    expect(wrapper.childAt(1).type()).toBe("CarouselButton");

  });
});