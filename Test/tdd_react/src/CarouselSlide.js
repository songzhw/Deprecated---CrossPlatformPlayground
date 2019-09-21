import React from "react";
import styled from "styled-components";

const SImage = styled.img`
  object-fit: cover;
  width: 60%;
  height: 500px;
`;


export const CarouselSlide = (props) => {
  const { imageUrl, description, author, ...rest } = props;
  return (
    <figure {...rest}>
      <SImage src={imageUrl}/>
      <figcaption>
        <strong>{description}</strong>
        {author}
      </figcaption>
      <text>on Unsplash</text>
    </figure>
  );
};
