import React, { KeyboardEvent } from "react";

export class KeyboardResponderDemo extends React.Component {
  state = {};

  constructor(props: any) {
    super(props);
    document.addEventListener("keydown", this.onKeyPressed);
  }

  onKeyPressed = (event: any) => {
    console.log(`szw event : key = `, event.key, "; code = ", event.keyCode);
  };

  render() {
    return (
      <div>
        <p>keyboard</p>
      </div>
    );
  }
}


