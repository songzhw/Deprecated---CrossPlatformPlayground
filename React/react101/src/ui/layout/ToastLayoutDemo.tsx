import React from "react";

export class ToastLayoutDemo extends React.Component {
  state = { queue: ["one", "two", "three"] };

  render() {
    return (
      <div className="toastContainer">
        {"one"}
        {"second"}
        {"three"}
      </div>
    );
  }
}
