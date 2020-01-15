import React from "react";
import "./webview.css"

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
    if (!this.webview) {
      return;
    }
    if (!this.webview.contentWindow) {
      return;
    }

    this.webview.contentWindow.postMessage("react says hi", "*");
  };

  render() {
    return (
      <div className="parent">
        <h1> {"Iframe <=> React"} </h1>
        <button onClick={this.passMessage}>{"Pass msg to <iframe>"}</button>
        <p/>
        <iframe src="loaded.html" style="height: 200"/>
        <p/>
        <iframe src="loaded.html" ref={el => this.webview = el} className="webview" frameBorder={1}/>
      </div>
    );
  }
}

