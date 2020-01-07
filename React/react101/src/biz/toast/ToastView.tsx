import React from "react";

interface IProps {
  text: string
}

export class ToastView extends React.Component<IProps> {
  state = {};

  render() {
    return (
      <div className="toastContainer">
        {this.props.text}
      </div>
    );
  }
}
