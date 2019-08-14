import React, { Component } from "react";
import { AppState, AppStateStatus, Text } from "react-native";

class AppStateExample extends Component {
  intervalHandler = 0;
  num = 0;
  state = {
    appState: AppState.currentState + this.num
  };


  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
    clearInterval(this.intervalHandler);
  }

  _handleAppStateChange = (nextAppState: AppStateStatus) => {
    console.log(`AppState changes: `, nextAppState);
    if (nextAppState === "background") {
      console.log(`background`);
      // @ts-ignore
      this.intervalHandler = setInterval(() => {
        this.num++;
        this.setState({ appState: nextAppState + this.num });
        console.log(`background: num++ : `, this.num);
      }, 1000);
    } else if (nextAppState === "active") {
      clearInterval(this.intervalHandler);
      console.log(`active clear interval`);
    }
  };

  render() {
    console.log(`Screen render: `, this.state.appState);
    return <Text style={{ fontSize: 25 }}>Current state is: {this.state.appState}</Text>;
  }
}

export default AppStateExample;