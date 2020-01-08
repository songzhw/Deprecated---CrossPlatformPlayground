import React from "react";
import "./Toast.css";
import { ToastText } from "./ToastText";

interface IProps {
  text: string
}

export class ToastView extends React.Component<IProps> {
  state = {};

  render() {
    return (
      <div className="toastContainer">
        <ToastText text={this.props.text}/>
        <ToastText text={"second"}/>
        <ToastText text={"third"}/>
      </div>
    );
  }
}


