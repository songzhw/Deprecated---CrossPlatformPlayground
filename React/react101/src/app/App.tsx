import React, { Component } from "react";
import "./App.css";
import { CountConsole } from "../Rtutor/simple/FunctionalComponent";
import { MovieScreen } from "../Rtutor/router/MovieScreen";

interface IState {
  isShowingWarning: boolean;
}

class App extends Component<{}, IState> {
  public state = { isShowingWarning: true };

  public render() {
    return (
      <div className="App">
        <MovieScreen/>
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

/*
    <CountConsole title="Count++ Example" onClick={()=>console.log('click')}/>
 */