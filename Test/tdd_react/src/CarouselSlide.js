import React from "react";
import styled from "styled-components";
import "./CarouselSlide.css"

export const SImage = styled.img`
  object-fit: cover;
  width: 60%;
  height: ${props =>
    typeof props.imgHeight === "number"
      ? `${props.imgHeight}px`
      : props.imgHeight
  };
`;


export const CarouselSlide = (props) => {
  const { imageUrl, description, author, imgHeight, ...rest } = props;
  return (
    <figure className="slide" {...rest}>
      <SImage src={imageUrl} imgHeight={imgHeight}/>
      <figcaption>
        <strong>{description}</strong>
        {author}
      </figcaption>
      <text>on Unsplash</text>
    </figure>
  );
};
