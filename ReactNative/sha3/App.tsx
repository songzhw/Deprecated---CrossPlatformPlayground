import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { PlayerView } from "./src/components/PlayerView";
import { MyDeck } from "./src/components/MyDeck";

interface Props {
}

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <PlayerView/>
        <PlayerView/>
        <PlayerView/>
        <MyDeck/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});