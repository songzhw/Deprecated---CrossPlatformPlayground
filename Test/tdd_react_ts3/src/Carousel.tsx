import React from "react";
import { CarouselButton } from "./CarouselButton";
import { ISlideData } from "./data";
import { CarouselSlide } from "./CarouselSlide";
import "./carousel.css";

interface IProps {
  slides: ISlideData[]
}

interface IState {
  index: number
}

export class Carousel extends React.Component<IProps, IState> {
  state = { index: 0 };

  onNext = () => {
    const size = this.props.slides.length;
    this.setState(({ index }) => {
      const pos = (index + 1) % size;
      return { index: pos };
    });

  };
  onPrev = () => {
    const size = this.props.slides.length;
    this.setState(({ index }) => {
      const pos = (index - 1 + size) % size;
      return { index: pos };
    });
  };

  render() {
    return (
      <div className="carousel">
        <CarouselSlide slide={this.props.slides[this.state.index]}/>
        <div className="controlBar">
          <CarouselButton className="buttons" onClick={this.onPrev}>Prev</CarouselButton>
          <CarouselButton className="buttons" onClick={this.onNext}>Next</CarouselButton>
        </div>
      </div>
    );
  }
}

