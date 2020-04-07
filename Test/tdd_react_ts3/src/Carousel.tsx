import React from "react";
import { CarouselButton } from "./CarouselButton";
import { ISlideData } from "./data";
import { CarouselSlide } from "./CarouselSlide";

interface IProps {
  slides: ISlideData[]
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
          <CarouselSlide slide={this.props.slides[0]}/>
          <CarouselButton className="buttons" onClick={this.onPrev}>Prev</CarouselButton>
          <CarouselButton className="buttons" onClick={this.onNext}>Next</CarouselButton>
        </div>
      </div>
    );
  }
}

