import React, { KeyboardEvent } from "react";

export class KeyboardResponderDemo extends React.Component {
  state = {};

  componentDidMount() {

  }

  onKeyPressed = (event: KeyboardEvent) => {
    console.log(`szw event = `, event.key);
  };

  render() {
    return (
      <div>
        <p>keyboard</p>
        <input type="text" id="keys" onKeyPress={this.onKeyPressed}/>
      </div>
    );
  }
}


