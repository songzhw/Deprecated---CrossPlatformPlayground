import { shallow } from "enzyme";
import Carousel from "../../src/Carousel";
import React from "react";

const slides = [
  { imageUrl: "https://a.com/1.png", description: "hello", author: "zzz" },
  { imageUrl: "https://a.com/2.png", description: "world", author: "xxx" },
  { imageUrl: "https://a.com/3.png", description: "js", author: "yyy" }
];

describe("with the first/last slide selected (edge case)", () => {
  test("wraps `index` to the max value when the first slide is selected and Prev is clicked", () => {
    const wrapper = shallow(<Carousel slides={slides}/>);
    // console.log(`1. `, wrapper.debug());   //=> <ComponentWithAutoAdvance slides={{...}} index={0} indexIncrement={[Function]} indexDecrement={[Function]} />
    // console.log(`2. `, wrapper.dive().debug());          //=>  <_Carousel slides={{...}} index={0} indexIncrement={[Function]} indexDecrement={[Function]} defaultImageHeight={500} />
    // console.log(`3. `, wrapper.dive().dive().debug());  //=> <div> <CarouselSlide/> <CarouselButton/>. ... </div>

    wrapper.setState({ index: 0 });

    const prevButton = wrapper.dive().dive().find("[data-testId='btnPrev']");
    prevButton.simulate("click");

    const lastIndex = slides.length - 1;
    expect(wrapper.state("index")).toBe(lastIndex);
  });

  test("wraps `index` to 0 when the last slide is selected and Next is clicked", () => {
    const wrapper = shallow(<Carousel slides={slides}/>);
    // console.log(`4. `, wrapper.debug());
    const lastIndex = slides.length - 1;
    wrapper.setState({ index: lastIndex });

    const prevButton = wrapper.dive().dive().find("[data-testId='btnNext']");
    prevButton.simulate("click");

    expect(wrapper.state("index")).toBe(0);
  });
});
