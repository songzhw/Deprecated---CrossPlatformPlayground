import React from "react";
import Media from "react-media";

interface IProps {
}

export const MediaDemo = (props: IProps) => {

  const media = window.matchMedia("(max-width:600px)");
  console.log(`szw ? = `, media);
  media.addEventListener("change", (ev: MediaQueryListEvent) => {
    console.log(`szw 3 = [ev =  `, ev.matches);
  });

  return (
    <div>
      <Media query="(max-width:600px)">
        {matches =>
          matches ? (<h1>Small</h1>) : (<h1>Large</h1>)}
      </Media>
    </div>
  );
};

