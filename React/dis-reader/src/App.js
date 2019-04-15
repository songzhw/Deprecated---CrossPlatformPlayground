import React, { Component } from "react";
import "./index.css";
import { http } from "./utils/download/HttpEngine";
import * as JSZip from "jszip";
import { JSDOM } from "jsdom";

class App extends Component {
  state = { text: "unload" };


  render() {
    return (
      <div className="appRootContainer">
        <span>{this.state.text}</span>
        <button className="buttonInHome" onClick={this.onDownload}>download epub</button>
        <button className="buttonInHome" onClick={this.onParseXML}>parse xml</button>
        <button className="buttonInHome" onClick={this.onUnzipContainer}>unzip epub: META-INF/container.xml</button>
        <button className="buttonInHome" onClick={this.onUnzipToc}>unzip epub: get ToC</button>
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

  onUnzipContainer = () => {
    const path = "META-INF/container.xml";
    JSZip.loadAsync(this.arraybufferResponse)
      .then(zip => {
        return zip.file(path)
          .async("string");
      })
      .then(text => {
        console.log("szw content = ", text);
        this.setState({ text });
      });
  };

  onParseXML = () => {
    let xml = `
      <?xml version="1.0" encoding="UTF-8"?>
      <container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">
        <rootfiles>
          <rootfile full-path="OPS/package.opf" media-type="application/oebps-package+xml">szw</rootfile>
        </rootfiles>
        <rootfile> 200 </rootfile>
      </container>
      `;
    const dom = new JSDOM(xml);
    const node = dom.window.document.querySelector("rootfile");
    console.log(`szw node text = ${node.textContent}`); //=> szw
    console.log(`szw node path = ${node.getAttribute("full-path")}`); //=> OPS/package.opf
    this.setState({ text: node.textContent });

  };

  onUnzipToc = () => {

  };
}

export default App;
