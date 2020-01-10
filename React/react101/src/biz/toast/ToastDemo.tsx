import React from "react";
import { Toast } from "./Toast";

export class ToastDemo extends React.Component {
  onClick = () => {
    Toast.show("toast bing");
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>add element dynamically</button>
      </div>
    );
  }
}


