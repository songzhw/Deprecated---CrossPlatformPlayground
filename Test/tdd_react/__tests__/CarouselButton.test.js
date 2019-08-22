import React from "react";
import { CarouselButton } from "../src/CarouselButton";
import { shallow } from "enzyme";

describe("CaraouselButton", () => {
  test("renders a <button>", () => {
    const wrapper = shallow(<CarouselButton/>);
    expect(wrapper.type()).toBe("button");
  });

  // 转义后,   <button>{children}</button>; 就等于 <button children={children}/>
  test("passes 'children' through the <button>", () => {
    const text = "hello world";
    const wrapper = shallow(<CarouselButton>{text}</CarouselButton>);
    expect(wrapper.prop("children")).toBe(text);
  });

  test("passes other props through to the <button>", () => {
    const onClick = () => {
    };
    const dataAction = "prev";
    const text = "event listener";

    const wrapper = shallow(<CarouselButton>{text}</CarouselButton>);
    wrapper.setProps({ onClick, "data-action": dataAction });

    expect(wrapper.prop("onClick")).toBe(onClick());

  });
});