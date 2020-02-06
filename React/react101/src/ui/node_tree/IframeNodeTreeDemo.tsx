import React from "react";
import "../UiDemos.css";

export class IframeNodeTreeDemo extends React.Component {
  state = {};
  webview: HTMLIFrameElement | null = null;

  render() {
    return (
      <div className="webViewContainer">
        <iframe ref={el => this.webview = el} src="loaded.html" className="webview"/>
      </div>
    );
  }
}
