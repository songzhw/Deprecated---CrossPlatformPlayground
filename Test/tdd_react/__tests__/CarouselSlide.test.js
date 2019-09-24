import React from "react";
import { shallow, mount } from "enzyme";
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

  test("2", () => {
    const wrapper = shallow(<SImage imgHeight={"150vh"}/>);
    /* wrapper.debug()的结果是: <StyledComponent imgHeight="150vh" forwardedComponent={{...}} forwardedRef={{...}} />     */
    expect(wrapper.prop("imgHeight")).toBe("150vh");
  });

  test("renders an <img> with the given src", () => {
    const imageUrl = "http://a.png";
    const wrapper = shallow(<CarouselSlide/>);
    wrapper.setProps({ imageUrl });
    wrapper.setProps({ description: "hello", author: "szw" });

    const img = wrapper.find(SImage); // img.debug()是  <styled.img src="http://a.png" imgHeight={[undefined]} />
    expect(img.prop("src")).toBe("http://a.png");
  });

  describe("mounted SImage", () => {
    let mounted;
    const imgUrl = "http://b.jpg";

    beforeEach(() => {
      mounted = mount(<SImage src={imgUrl} imgHeight={222}/>);
      /*
      mounted.debug()的结果是:
          <styled.img src="http://b.jpg" imgHeight={222}>
            <StyledComponent src="http://b.jpg" imgHeight={222} forwardedComponent={{...}} forwardedRef={{...}}>
              <img src="http://b.jpg" className="sc-bdVaJa jFqGzu" />
            </StyledComponent>
          </styled.img>
      可见, mount()的会将HoC包裹的原组件也给渲染出来.

      备注: 另外也看到了styled.img是怎么回事, 其实就是新生成一个style, 放到<img>的className里去
       */
    });

    test("renders an <img> with the given src(mount)", () => {
      const isContainingImg = mounted.containsMatchingElement(<img src={imgUrl}/>);
      expect(isContainingImg).toBeTruthy();
    });

    test("has the expected static styles", () => {
      console.log(mounted.debug());
      expect(mounted).toHaveStyleRule("width", "60%");
    });
  });

});
