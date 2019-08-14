import React, { Component } from "react";
import { AppState, Text } from "react-native";

class AppStateExample extends Component {
  state = {
    appState: AppState.currentState
  };

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState: any) => {
    console.log(`AppState changes: `, nextAppState);
    this.setState({ appState: nextAppState });
  };

  render() {
    return <Text>Current state is: {this.state.appState}</Text>;
  }
}

export default AppStateExample;