import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Routes } from "./src/core/Routes";
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
  const RouterContainer = createAppContainer(Routes);
  const theme = { bg: "green", textColor: "white" };
  return (
    <ReduxProvider store={store}>
      <RouterContainer screenProps={theme}/>
    </ReduxProvider>
  );
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps)(App);
