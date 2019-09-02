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

  test("test props from image, text", () => {
    const imageUrl = "http://a.png";
    const wrapper = shallow(<CarouselSlide/>);
    wrapper.setProps({ imageUrl });
    wrapper.setProps({ description: "hello", author: "szw" });

    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(imageUrl);

    const fig = wrapper.find("figcaption strong");
    expect(fig.text()).toBe("hello");

    const figAuthor = wrapper.find("figcaption");
    expect(figAuthor.text()).toBe("szw");
  });
});