import React from "react";
import { mount, shallow } from "enzyme";
import Carousel, { _Carousel } from "../../src/Carousel";

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


describe("Carousel with HoCs", () => {
  let mounted;
  beforeEach(() => {
    mounted = mount(<Carousel slides={slides}/>);
  });

  test("passes `slides` down to the core component", () => {
    expect(mounted.find(_Carousel).prop("slides")).toBe(slides);
  });

  test("allows `index` to be controlled", () => {
    mounted = mount(<Carousel slides={slides}/>);
    expect(mounted.find(_Carousel).prop("index")).toBe(0);
    mounted.setState({ index: 2 });
    expect(mounted.find(_Carousel).prop("index")).toBe(2);
  });
});

/*
mounted.debug() =

   <ComponentWithIndex slides={{...}}>
      <ComponentWithAutoAdvance slides={{...}} index={0} indexIncrement={[Function]} indexDecrement={[Function]}>
        <_Carousel slides={{...}} index={0} indexIncrement={[Function]} indexDecrement={[Function]} defaultImageHeight={500}>
          <div indexIncrement={[Function]} indexDecrement={[Function]}>
            <CarouselSlide imageUrl="https://a.com/1.png" description="hello" author="zzz" imgHeight={500}>
              <figure>
                <styled.img src="https://a.com/1.png" imgHeight={500}>
                  <StyledComponent src="https://a.com/1.png" imgHeight={500} forwardedComponent={{...}} forwardedRef={{...}}>
                    <img src="https://a.com/1.png" className="sc-bdVaJa dTxKS" />
                  </StyledComponent>
                </styled.img>
                <figcaption>
                  <strong>
                    hello
                  </strong>
                  zzz
                </figcaption>
                <text>
                  on Unsplash
                </text>
              </figure>
            </CarouselSlide>
            <CarouselButton data-testId="btnPrev" onClick={[Function]}>
              <button data-testId="btnPrev" onClick={[Function]}>
                Prev
              </button>
            </CarouselButton>
            <CarouselButton data-testId="btnNext" onClick={[Function]}>
              <button data-testId="btnNext" onClick={[Function]}>
                Next
              </button>
            </CarouselButton>
          </div>
        </_Carousel>
      </ComponentWithAutoAdvance>
    </ComponentWithIndex>


 */
