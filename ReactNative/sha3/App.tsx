import React, { Component } from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { PlayerView } from "./src/components/PlayerView";
import { MyDeck } from "./src/components/MyDeck";
import { PLAYER_HEIGHT, PLAYER_WIDTH } from "./src/data/Const";


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <PlayerView/>
          <PlayerView/>
          <PlayerView/>
        </View>
        <View style={styles.row}>
          <PlayerView/>
          <PlayerView/>
        </View>
        <View style={styles.row}>
          <PlayerView/>
          <PlayerView/>
        </View>
        <MyDeck/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#F5FCFF"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});