import React from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselButton } from "./CarouselButton";
import { IndexLooperWrapper } from "./IndexLooperWrapper";
import { AutoAdvancesWrapper } from "./AutoAdvancesWrapper";
import "./Carousel.css"

export class _Carousel extends React.Component {
  static defaultProps = {
    defaultImageHeight: 500
  };

  onNext = () => {
    const { slides, indexIncrement } = this.props;
    indexIncrement(slides.length);
  };

  onPrev = () => {
    const { slides, indexDecrement } = this.props;
    indexDecrement(slides.length);
  };

  render() {
    const { slides, defaultImageHeight, index, ...rest } = this.props;
    const currentSlideData = slides[index];
    return (
      <div className="carousel" {...rest}>
        <CarouselSlide {...currentSlideData} imgHeight={defaultImageHeight}/>
        <CarouselButton data-testId="btnPrev" onClick={this.onPrev}>Prev</CarouselButton>
        <CarouselButton data-testId="btnNext" onClick={this.onNext}>Next</CarouselButton>
      </div>
    );
  }
}

export default IndexLooperWrapper(
  AutoAdvancesWrapper(_Carousel, "index", "slides", 5000)
  , "index");
