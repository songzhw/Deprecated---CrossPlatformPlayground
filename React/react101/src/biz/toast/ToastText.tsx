import React from "react";
import "./Toast.css"

interface IProps {
  text: string;
}

export class ToastText extends React.Component<IProps> {
  render() {
    return (
      <div className="text">
        {this.props.text}
      </div>
    );
  }
}
