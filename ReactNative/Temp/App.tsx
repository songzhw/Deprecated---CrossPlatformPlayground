import React, { Component } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "beeshell";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

interface Props {
}

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button type="primary" size="md" style={styles.item}>Primary 11</Button>
        <Button type="primary" size="md" textColorInverse style={styles.item}>Primary 22</Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    marginTop: 10
  }

});