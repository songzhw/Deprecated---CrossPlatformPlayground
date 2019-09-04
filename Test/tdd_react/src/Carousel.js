import React from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselButton } from "./CarouselButton";

export class Carousel extends React.Component {
  state = { index: 0 };

  onNext = () => {
    this.setState({ index: this.state.index + 1 });
  };

  render() {
    return (
      <div>
        <CarouselSlide/>
        <CarouselButton>Prev</CarouselButton>
        <CarouselButton onClick={this.onNext}>Next</CarouselButton>
      </div>
    );
  }
}
