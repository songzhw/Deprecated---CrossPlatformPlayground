import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Router } from "./src/core/Routes";
import { createAppContainer } from "react-navigation";
import { connect, Provider as ReduxProvider } from "react-redux";
import { store } from "./src/core/redux/Store";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const App = () => {
  const theme = { bg: "green", textColor: "white" }; //TODO delete

  return (
    <ReduxProvider store={store}>
      <Router screenProps={theme}/>
    </ReduxProvider>
  );
};


export default App;
