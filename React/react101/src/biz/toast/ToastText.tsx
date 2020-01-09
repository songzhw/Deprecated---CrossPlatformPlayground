import React from "react";
import "./Toast.css";

interface IProps {
  id: string;
  text: string;
  duration: number;
  onHide: (id: string) => void;
}

export class ToastText extends React.Component<IProps> {
  public static defaultProps = {
    duration: 2000
  };

  componentDidMount(): void {
    const { id, duration, onHide } = this.props;
    setTimeout(() => onHide(id), duration);
  }

  render() {
    return (
      <div className="text">
        {this.props.text}
      </div>
    );
  }
}
