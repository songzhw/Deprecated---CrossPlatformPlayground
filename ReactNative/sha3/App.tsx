import React, { Component } from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { PlayerView } from "./src/components/PlayerView";
import { MyDeck } from "./src/components/MyDeck";


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PlayerView/>
        <PlayerView style={styles.topCenter}/>
        <PlayerView/>
        <PlayerView/>
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
  topCenter: {
    alignSelf:'center'
  }
});