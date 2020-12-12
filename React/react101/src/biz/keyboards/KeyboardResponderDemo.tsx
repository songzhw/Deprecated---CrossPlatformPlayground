import React, { KeyboardEvent } from "react";
import { ArrowKeysReact } from "./ArrowDetector";

export class KeyboardResponderDemo extends React.Component {
  state = {};

  constructor(props: any) {
    super(props);
    ArrowKeysReact.config({
      left: () => {
        console.log("left key detected.");
      },
      right: () => {
        console.log("right key detected.");
      },
      up: () => {
        console.log("up key detected.");
      },
      down: () => {
        console.log("down key detected.");
      }
    });
  }

  onKeyPressed = (event: KeyboardEvent) => {
    console.log(`szw event : key = `, event.key, "; code = ", event.keyCode);
  };

  render() {
    return (
      <div {...ArrowKeysReact.events} style={{backgroundColor: "red", display: "flex", width: "100%", height:"100%"}}>
        <p>keyboard</p>
      </div>
    );
  }
}


