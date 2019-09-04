import { shallow } from "enzyme";
import React from "react";
import { Carousel } from "../src/Carousel";
import { CarouselButton } from "../src/CarouselButton";

describe("Carousel", () => {
  test.skip("has slide and button children", () => {
    const wrapper = shallow(<Carousel/>);
    console.log(`szw ,`, wrapper.debug());
    expect(wrapper.childAt(0).type()).toBe("CarouselSlide");
    expect(wrapper.childAt(1).type()).toBe("CarouselButton");
  });

  test("initial state", () => {
    const wrapper = shallow(<Carousel/>);
    expect(wrapper.state("index")).toBe(0);

    const buttonArray = wrapper.find(CarouselButton);
    expect(buttonArray.at(0).prop("children")).toBe("Prev");
  });

  test("increments `index` when Next is clicked", () => {
    const wrapper = shallow(<Carousel/>);
    const nextButton = wrapper.find(CarouselButton).at(1);
    nextButton.simulate("click");
    expect(wrapper.state("index")).toBe(1);
  });
});