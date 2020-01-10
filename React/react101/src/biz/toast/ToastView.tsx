import React from "react";
import "./Toast.css";
import { removeBy } from "../../utils/ArrayUtils";
import { ToastText } from "./ToastText";
import { weakUuid } from "../../utils/utils";

interface IProps {
}

// tslint:disable-next-line:interface-name
interface ToastItem {
  id: string;
  text: string;
  onClose: (id: string) => void;
  isShowing: boolean;
}

export class ToastView extends React.Component<IProps> {
  queue: ToastItem[] = [];
  state = { queue: this.queue };

  add(text: string) {
    const id = weakUuid();
    const item = { id, text, onClose: this.onHideOneText, isShowing: true };
    this.queue.push(item);
    this.setState({ queue: this.queue });
  }

  onHideOneText = (toastId: string) => {
    const { queue } = this.state;
    const newQueue = removeBy(queue, (item: ToastItem) => item.id !== toastId);
    console.log(`szw time to remove(${toastId}): `, newQueue);
    this.setState({ queue: newQueue });
  };

  render() {
    return (
      <div className="toastContainer">

        {this.queue.reverse()
          .filter(item => item.isShowing)
          .map(item =>
            (<ToastText key={item.id} id={item.id} text={item.text} onHide={item.onClose}/>)
          )}


      </div>
    );
  }
}


