import React from "react";
import { shallow } from "enzyme";
import { CarouselSlide, SImage } from "../src/CarouselSlide";

describe("CaraouselSlide", () => {
  test("renders a <figure>", () => {
    const wrapper = shallow(<CarouselSlide/>);
    expect(wrapper.type()).toBe("figure");
  });

  // test("render a <image/> child", () => {
  //   const wrapper = shallow(<CarouselSlide/>);
  //   expect(wrapper.childAt(0).type()).toBe("img");
  //   expect(wrapper.childAt(1).type()).toBe("figcaption");
  // });

  test("test props from image, text", () => {
    const imageUrl = "http://a.png";
    const wrapper = shallow(<CarouselSlide/>);
    wrapper.setProps({ imageUrl });
    wrapper.setProps({ description: "hello", author: "szw" });

    const img = wrapper.find(SImage);
    expect(img.prop("src")).toBe(imageUrl);

    const fig = wrapper.find("figcaption strong");
    expect(fig.text()).toBe("hello");

    const figAuthor = wrapper.find("figcaption");
    expect(figAuthor.text()).toBe("helloszw");
  });

  test("passes other props through to the <figure>", () => {
    const className = "myCarouselSlide";
    const onClick = () => {
    };
    const wrapper = shallow(<CarouselSlide/>);
    wrapper.setProps({ className, onClick });

    expect(wrapper.prop("className")).toBe(className);
    expect(wrapper.prop("onClick")).toBe(onClick);
  });
});

describe("Styled Image (SImage)", () => {
  test("1", () => {
    const wrapper = shallow(<SImage imgHeight={200}/>);
    /* wrapper.debug()的结果是:
     <StyledComponent imgHeight={200} forwardedComponent={{...}} forwardedRef={{...}} />
    可见这个imgHeight被直接传了下来
     */
    expect(wrapper.prop("imgHeight")).toBe(200);
  });
});
