import React from "react";
import { CarouselButton } from "./CarouselButton";
import { ISlideData } from "./data";

interface IProps {
  slides: ISlideData[]
}

export class Carousel extends React.Component<IProps> {
  onNext = () => {
  };
  onPrev = () => {
  };

  render() {
    console.log(`szw slides = `, this.props.slides);
    return (
      <div className="carousel">
        <div className="controlBar">
          <CarouselButton className="buttons" onClick={this.onPrev}>Prev</CarouselButton>
          <CarouselButton className="buttons" onClick={this.onNext}>Next</CarouselButton>
        </div>
      </div>
    );
  }
}

