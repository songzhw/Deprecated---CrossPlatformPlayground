import React, { Component } from "react";
import "./index.css";
import { http } from "./utils/download/HttpEngine";
import * as JSZip from "jszip";

class App extends Component {
  state = { text: "unload" };


  render() {
    return (
      <div className="appRootContainer">
        <span>{this.state.text}</span>
        <button className="buttonInHome" onClick={this.onDownload}>download epub</button>
        <button className="buttonInHome" onClick={this.onUnzip}>unzip epub</button>
        {/*TODO read xml*/}
        {/*TODO render xhtml*/}
      </div>
    );
  }

  onDownload = () => {
    const url = "https://gerhardsletten.github.io/react-reader/files/alice.epub";
    http(url)
      .then(arraybufferData => {
        this.arraybufferResponse = arraybufferData;
        this.setState({ text: "donwload finished" });
      });
  };

  onUnzip = () => {
    const path = "META-INF/container.xml";
    JSZip.loadAsync(this.arraybufferResponse)
      .then(zip => {
        return zip.file(path)
          .async("string");
      })
      .then(text => {
        console.log("szw content = ", text);
      });
  };
}

export default App;
