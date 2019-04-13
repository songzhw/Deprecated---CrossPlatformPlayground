import React, { Component } from "react";
import { EpubView } from "./epubView/EpubView";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <EpubView
          url="https://gerhardsletten.github.io/react-reader/files/alice.epub"
        />
      </div>
    );
  }
}

export default App;
