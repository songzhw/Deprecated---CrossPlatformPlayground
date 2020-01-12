import React from "react";

export class IFrameCommunicationDemo extends React.Component {
  state = {};

  componentDidMount() {
    const callback = (event: MessageEvent) => {
      console.log(`msg from <iframe>: ${event.data}`);
    };
    window.addEventListener("message", callback, false);
  }


  render() {
    return (
      <div>
        <h1> {"Iframe <=> React"} </h1>
        <iframe src="loaded.html" id="ifa"/>
      </div>
    );
  }
}

