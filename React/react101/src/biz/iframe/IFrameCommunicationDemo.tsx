import React from "react";

export class IFrameCommunicationDemo extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h1> {"Iframe <=> React"} </h1>
        <iframe src="./loaded.html" id="ifa"/>
      </div>
    );
  }
}

