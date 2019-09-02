import React from "react";

// interface IProps{
//   imageUrl: string;
//   description: string;
//   author: string;
// }

export const CarouselSlide = (props) => {
  return (
    <figure>
      <img src={props.imageUrl}/>
      <figcaption>
        <strong>{props.description}</strong>
        {props.author}
      </figcaption>
    </figure>
  );
};