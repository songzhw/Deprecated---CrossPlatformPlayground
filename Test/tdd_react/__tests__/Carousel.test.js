import { shallow } from "enzyme";
import React from "react";
import { Carousel } from "../src/Carousel";
import { CarouselButton } from "../src/CarouselButton";
import { CarouselSlide } from "../src/CarouselSlide";

describe("Carousel", () => {
  const slides = [
    { imageUrl: "https://a.com/1.png", description: "hello", author: "zzz" },
    { imageUrl: "https://a.com/2.png", description: "world", author: "xxx" },
    { imageUrl: "https://a.com/3.png", description: "js", author: "yyy" }
  ];


  test.skip("has slide and button children", () => {
    const wrapper = shallow(<Carousel slides={slides}/>);
    console.log(`szw ,`, wrapper.debug());
    expect(wrapper.childAt(0).type()).toBe("CarouselSlide");
    expect(wrapper.childAt(1).type()).toBe("CarouselButton");
    // 其实可以用 wrapper.find(CarouselSlide).toBeNotNull()来测试!
  });

  test("initial state", () => {
    const wrapper = shallow(<Carousel slides={slides}/>);
    expect(wrapper.state("index")).toBe(0);

    const buttonArray = wrapper.find(CarouselButton);
    expect(buttonArray.at(0).prop("children")).toBe("Prev");
  });

  test("increments `index` when Next is clicked", () => {
    const wrapper = shallow(<Carousel slides={slides}/>);
    const nextButton = wrapper.find(CarouselButton).at(1);
    nextButton.simulate("click");
    expect(wrapper.state("index")).toBe(1);
  });

  test("renders the current slide as a CarouselSlide", () => {
    const wrapper = shallow(<Carousel slides={slides}/>);
    let slideProps = wrapper.find(CarouselSlide).props();
    expect(slideProps).toEqual(slides[0]);
  });

  test("render the correct slide when Next is clicked", ()=>{

  })

});