import React from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselButton } from "./CarouselButton";

export class Carousel extends React.Component {
  state = { index: 0 };

  onNext = () => {
    // this.setState({ index: this.state.index + 1 });
    this.setState(({ index }) => ({
      index: index + 1
    }))
    ;
  };

  onPrev = () => {
    this.setState(({ index }) => ({
      index: index - 1
    }))
    ;
  };

  render() {
    const { slides, ...rest } = this.props;
    const currentSlideData = slides[this.state.index];
    return (
      <div {...rest}>
        <CarouselSlide {...currentSlideData}/>
        <CarouselButton data-testId="btnPrev" onClick={this.onPrev}>Prev</CarouselButton>
        <CarouselButton data-testId="btnNext" onClick={this.onNext}>Next</CarouselButton>
      </div>
    );
  }
}
