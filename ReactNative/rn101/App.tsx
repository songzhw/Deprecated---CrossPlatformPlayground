import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Routes } from "./src/core/Routes";
import { createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

interface IProps {
}

const App = (props: IProps) => {
  const RouterContainer = createAppContainer(Routes);
  return (
    <RouterContainer/>
  );
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
