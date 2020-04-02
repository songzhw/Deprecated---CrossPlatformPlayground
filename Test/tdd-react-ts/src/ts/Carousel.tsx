import React from "react";
import { ISlideItem } from "./data";
import { CarouselButton } from "./CarouselButton";

interface IProps {
  slides: ISlideItem[]
}

export class Carousel extends React.Component<IProps> {
  state = {};

  onPrev = () => {
  };
  onNext = () => {
  };

  render() {
    return (
      <div className="controlBar">
        <CarouselButton className="buttons" data-testId="btnPrev" onClick={this.onPrev}>Prev</CarouselButton>
        <CarouselButton className="buttons" data-testId="btnNext" onClick={this.onNext}>Next</CarouselButton>
      </div>
    );
  }
}

