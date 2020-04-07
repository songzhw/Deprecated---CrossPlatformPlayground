import React from "react";
import { ISlideData } from "./data";

interface IProps {
  slide: ISlideData
}

export const CarouselSlide = (props: IProps) => {

  return (
    <figure className="slide" >
      <img className={"slideImage"} src={props.slide.imageUrl}/>
      <figcaption>
        <strong>{props.slide.description}</strong>
        {props.slide.author}
      </figcaption>
      <text>on Unsplash</text>
    </figure>
  );
};

