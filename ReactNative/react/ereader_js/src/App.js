import React, { Component } from "react";
import { EpubView } from "./epub_view/EpubView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <EpubView
            url="https://gerhardsletten.github.io/react-reader/files/alice.epub"
          />
        </header>
      </div>
    );
  }
}

export default App;
