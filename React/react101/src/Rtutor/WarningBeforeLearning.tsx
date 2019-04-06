import React from "react";
import "./WarningBeforeLearning.css"

class WarningBeforeLearning extends React.Component {
  public render() {
    return (
      <div className="confirm-wrapper confirm-visible">
        <div className="confirm-container">

          <div className="confirm-title-container">
            <span>Start to learn React + Typescript</span>
          </div>

          <div className="confirm-content-container">
            <p>Are you ready?</p>
          </div>

          <div className="confirm-buttons-container">
            <button>No, thanks</button>
            <button>Yes, please</button>
          </div>

        </div>
      </div>
    );
  }
}

export default WarningBeforeLearning;