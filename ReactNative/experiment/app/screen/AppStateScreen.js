import {Component} from "react";
import {AppState, Text, View, NetInfo} from "react-native";
import React from "react";

export default class App extends Component {
  state = {
    connection: null,
    appState: AppState.currentState,
    previousAppStates: []
  }

  componentDidMount() {
    AppState.addEventListener('change', this.onAppStateChange)

    NetInfo.addEventListener('connectionChange', this.onNetInfoChange)
    NetInfo.fetch()
      .then(conn => this.onNetInfoChange(conn))
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.onAppStateChange)
    NetInfo.removeEventListener('connectionChange', this.onNetInfoChange)
  }

  onNetInfoChange = (connc) => {
    this.setState({...this.state, connection: connc})
  }


  onAppStateChange = (thisAppState) => {
    var tmp = this.state.previousAppStates.slice() // just a copy
    tmp.push(this.state.appState)
    this.setState({...this.state, appState: thisAppState, previousAppStates: tmp})
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