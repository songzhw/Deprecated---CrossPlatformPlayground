import { mount, shallow } from "enzyme";
import React from "react";
import { CarouselButton } from "../src/CarouselButton";
import { CarouselSlide } from "../src/CarouselSlide";
import Carousel, { _Carousel } from "../src/Carousel";
import { IndexLooperWrapper } from "../src/IndexLooperWrapper";

const slides = [
  { imageUrl: "https://a.com/1.png", description: "hello", author: "zzz" },
  { imageUrl: "https://a.com/2.png", description: "world", author: "xxx" },
  { imageUrl: "https://a.com/3.png", description: "js", author: "yyy" }
];

describe("Carousel", () => {
  test("initial state", () => {
    const wrapper = shallow(<_Carousel slides={slides}/>);
    const buttonArray = wrapper.find(CarouselButton);
    expect(buttonArray.at(0).prop("children")).toBe("Prev");
  });

  test("renders the current slide as a CarouselSlide", () => {
    const wrapper = shallow(<_Carousel slides={slides} index={0}/>);
    let slideImgProps = wrapper.find(CarouselSlide).props();
    expect(slideImgProps).toEqual({
      ...slides[0],
      imgHeight: _Carousel.defaultProps.defaultImageHeight
    });
  });

});

