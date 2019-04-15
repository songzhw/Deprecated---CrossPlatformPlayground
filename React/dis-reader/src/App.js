import React, { Component } from "react";
import "./index.css";

class App extends Component {

  render() {
    return (
      <div className="appRootContainer">
        <button className="buttonInHome" onClick={this.onDownload}>download epub</button>
        <button className="buttonInHome">unzip epub</button>
        {/*TODO read xml*/}
        {/*TODO render xhtml*/}
      </div>
    );
  }

  onDownload = () => {
    const url = "https://gerhardsletten.github.io/react-reader/files/alice.epub";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = () => {
      if (xhr.status && xhr.status < 400) {
        console.log(`szw got resposne : ${xhr.status}`);
        this.arraybufferResponse = xhr.response;
      } else {
        console.log(`szw error on downloading : ${xhr.status}`);
      }
    };
    xhr.send();
  };
}

export default App;
