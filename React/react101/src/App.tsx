import React, { Component } from "react";
import logo from "./res/logo.svg";
import "./css/App.css";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
            Hello, React (+ TypeScript)
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
          <a className="App-link" href="https://www.typescriptlang.org/docs/handbook/basic-types.html" target="_blank"> Learn TypeScript </a>
        </header>
      </div>
    );
  }
}

export default App;
