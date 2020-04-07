import React from "react";
import { CarouselButton } from "./CarouselButton";
import { ISlideData } from "./data";
import { CarouselSlide } from "./CarouselSlide";
import "./carousel.css"

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
        <CarouselSlide slide={this.props.slides[0]}/>
        <div className="controlBar">
          <CarouselButton className="buttons" onClick={this.onPrev}>Prev</CarouselButton>
          <CarouselButton className="buttons" onClick={this.onNext}>Next</CarouselButton>
        </div>
      </div>
    );
  }
}

