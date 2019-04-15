import React, { Component } from "react";
import "./index.css";
import { http } from "./utils/download/HttpEngine";
import Archive from "./utils/zip/Archive";

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
    this.archive = new Archive(this.arraybufferResponse);
    const containerFile = this.archive.getFile("META-INF/container.xml"); //若找不到文件, 返回值为undefined; 找到就返回一个ArchiveEntry
    containerFile.extract()
      .then(() => {
        let document = containerFile.getFileContentAsDOM();
        console.log(`szw document`, document)
      });
    console.log("szw", containerFile);
  };
}

export default App;
