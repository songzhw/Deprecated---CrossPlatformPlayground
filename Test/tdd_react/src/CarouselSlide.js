import React from "react";

// interface IProps{
//   imageUrl: string;
//   description: string;
//   author: string;
// }

export const CarouselSlide = (props) => {
  const { imageUrl, description, author, ...rest } = props;
  return (
    <figure {...rest}>
      <img src={imageUrl}/>
      <figcaption>
        <strong>{description}</strong>
        {author}
      </figcaption>
    </figure>
  );
};