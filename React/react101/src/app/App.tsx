import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import WarningBeforeLearning from "../Rtutor/WarningBeforeLearning";
import { CountConsole } from "../Rtutor/FunctionalComponent";

interface IState {
  isShowingWarning: boolean;
}

class App extends Component<{}, IState> {
  public state = { isShowingWarning: true };

  public render() {
    return (
      <div className="App">
        <CountConsole text="two" onClick={()=>console.log('click')}/>
      </div>

    );

    function clickOk() {
      return console.log(`clicked ok`);
    }
  }
}

export default App;

/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          Hello, React (+ TypeScript)
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
        </header>
        {this.state.isShowingWarning ?
          <WarningBeforeLearning
            content="start to learn React?"
            onOkClick={clickOk}/>
          : <p/>}
 */