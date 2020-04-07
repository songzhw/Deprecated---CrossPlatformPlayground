import React from "react";
import { CarouselButton } from "./CarouselButton";

interface IProps {
}

export class Carousel extends React.Component<IProps> {
  onNext = () => {
  };
  onPrev = () => {
  };

  render() {
    return (
      <div className="carousel">
        <div className="controlBar">
          <CarouselButton className="buttons" data-testId="btnPrev" onClick={this.onPrev}>Prev</CarouselButton>
          <CarouselButton className="buttons" data-testId="btnNext" onClick={this.onNext}>Next</CarouselButton>
        </div>
      </div>
    );
  }
}

