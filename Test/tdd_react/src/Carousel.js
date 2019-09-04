import React from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselButton } from "./CarouselButton";

export class Carousel extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <CarouselSlide/>
        <CarouselButton/>
      </div>
    );
  }
}
