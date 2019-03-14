import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import { store, persistore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./core/Routes";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  renderLoading = () => (
    <ActivityIndicator size="large"/>
  );

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={this.renderLoading()} persistor={persistore}>
          <Routes/>
        </PersistGate>
      </Provider>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
