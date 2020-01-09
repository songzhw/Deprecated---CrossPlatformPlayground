import React from "react";
import "./Toast.css";
import { ToastText } from "./ToastText";

interface IProps {
  text: string
}

export class ToastView extends React.Component<IProps> {
  state = {};

  onHideOneText = () => {
    console.log(`szw time to hide`);
  };

  render() {
    return (
      <div className="toastContainer">
        <ToastText text={this.props.text} onHide={this.onHideOneText}/>
        {/*<ToastText text={"second"}/>*/}
        {/*<ToastText text={"super long and very long, hello world, this is js and react and toast playground"}/>*/}
      </div>
    );
  }
}


