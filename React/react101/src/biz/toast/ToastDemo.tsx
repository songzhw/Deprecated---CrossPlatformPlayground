import React from "react";
import ReactDOM from "react-dom";
import { PreToastView } from "./split/PreToastView";
import { Toast } from "./Toast";

export class ToastDemo extends React.Component {
  state = {};

  onClick = () => {
    Toast.show("toast bing")
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>add element dynamically</button>
      </div>
    );
  }
}


