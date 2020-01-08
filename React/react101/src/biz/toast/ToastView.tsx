import React from "react";
import "./Toast.css";

interface IProps {
  text: string
}

export class ToastView extends React.Component<IProps> {
  state = {};

  render() {
    return (
      <div className="toastContainer">
        {this.props.text}
        {"second"}
        {"three"}
      </div>
    );
  }
}
