import React, { KeyboardEvent } from "react";

export class KeyboardResponderDemo extends React.Component {
  state = {};

  componentDidMount() {

  }

  onKeyPressed = (event: KeyboardEvent) => {
    console.log(`szw event : key = `, event.key, "; code = ", event.keyCode);
  };

  render() {
    return (
      <div>
        <p>keyboard</p>
        <input onKeyPress={this.onKeyPressed}/>
      </div>
    );
  }
}


