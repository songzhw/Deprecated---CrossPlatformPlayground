import React from "react";
import "./WarningBeforeLearning.css";

interface IProps {
  title: string;
  content: string;
  okCaption?: string;
  onOkClick: () => void;
}

class WarningBeforeLearning extends React.Component<IProps> {
  public static defaultProps = {
    title: "one",
    okCaption: "yes!"
  };

  public render() {
    return (
      <div className="confirm-wrapper confirm-visible">
        <div className="confirm-container">

          <div className="confirm-title-container">
            <span>{this.props.title}</span>
          </div>

          <div className="confirm-content-container">
            <p>{this.props.content}</p>
          </div>

          <div className="confirm-buttons-container">
            <button className="confirm-cancel">No, thanks</button>
            <button className="confirm-ok" onClick={this.props.onOkClick}>{this.props.okCaption}</button>
          </div>

        </div>
      </div>
    );
  }
}

export default WarningBeforeLearning;
