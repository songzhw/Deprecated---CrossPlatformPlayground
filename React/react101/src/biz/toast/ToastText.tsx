import React from "react";
import "./Toast.css";

interface IProps {
  text: string;
  duration: number;
  onHide: () => void;
}

export class ToastText extends React.Component<IProps> {
  public static defaultProps = {
    duration: 2000
  };

  componentDidMount(): void {
    setTimeout(this.props.onHide, this.props.duration);
  }

  render() {
    return (
      <div className="text">
        {this.props.text}
      </div>
    );
  }
}
