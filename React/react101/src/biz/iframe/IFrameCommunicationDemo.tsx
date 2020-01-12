import React from "react";

export class IFrameCommunicationDemo extends React.Component {
  state = {};
  webview: HTMLIFrameElement | null = null;

  componentDidMount() {
    const callback = (event: MessageEvent) => {
      console.log(`msg from <iframe>: ${event.data}`);
    };
    window.addEventListener("message", callback, false);
  }

  passMessage = () => {

  };

  render() {
    return (
      <div>
        <h1> {"Iframe <=> React"} </h1>
        <button onClick={this.passMessage}>{"Pass msg to <iframe>"}</button>
        <p/>
        <iframe src="loaded.html" ref={el => this.webview = el}/>
      </div>
    );
  }
}

