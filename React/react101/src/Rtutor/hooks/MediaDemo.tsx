import React from "react";
import Media from "react-media";

interface IProps {
}

export const MediaDemo = (props: IProps) => {

  const media = window.matchMedia("(max-width:600px)");
  console.log(`szw ? = `, media);
  // @ts-ignore
  media.addEventListener("change", (list, ev) => {
    console.log(`szw 3 = `, list, ev);
  });

  function foo(id: number, listener: (age: number, name: string) => string) {
    listener(id, `${id}name`);
  }

  function click() {
    // foo(23, (age: number, name: string) => {  //=> okay
    foo(23, (age, name) => { //=> okay
      console.log(`click() `, age, name);
      return "";
    });
  }

  return (
    <div>
      <Media query="(max-width:600px)">
        {matches =>
          matches ? (<h1>Small</h1>) : (<h1>Large</h1>)}
      </Media>
      <button onClick={click}>Click Me</button>
    </div>
  );
};

