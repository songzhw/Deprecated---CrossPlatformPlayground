import React, { Component } from "react";
import "./index.css";
import { http } from "./utils/download/HttpEngine";

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
    http(url)
      .then(arraybufferData => this.arraybufferResponse = arraybufferData);
  };
}

export default App;
