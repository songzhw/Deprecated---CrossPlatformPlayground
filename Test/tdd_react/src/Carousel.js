import React from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselButton } from "./CarouselButton";

export class Carousel extends React.Component {
  state = { index: 0 };

  render() {
    return (
      <div>
        <CarouselSlide/>
        <CarouselButton/>
      </div>
    );
  }
}
