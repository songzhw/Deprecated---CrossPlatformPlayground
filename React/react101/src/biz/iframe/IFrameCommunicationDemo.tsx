import React from "react";

export class IFrameCommunicationDemo extends React.Component {
  state = {};

  componentDidMount() {
    const callback = (event: any) => {
      console.log(`szw get value from <iframe> page: `, event);
    };
    window.addEventListener("change", callback, false);
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

