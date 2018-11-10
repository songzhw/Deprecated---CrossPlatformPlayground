import {Component} from "react";
import {AppState, Text, View} from "react-native";
import React from "react";

export default class App extends Component {
  state = {
    appState: AppState.currentState,
    previousAppStates: []
  }

  componentDidMount() {
    AppState.addEventListener('change', this.onAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.onAppStateChange)
  }


  onAppStateChange = (thisAppState) => {
    var tmp = this.state.previousAppStates.slice() // just a copy
    tmp.push(this.state.appState)
    this.setState({appState: thisAppState, previousAppStates: tmp})
  }

  render() {
    return (
      <View>
        <Text>One</Text>
        <Text>{JSON.stringify(this.state.previousAppStates)}</Text>
      </View>
    )
  }

}