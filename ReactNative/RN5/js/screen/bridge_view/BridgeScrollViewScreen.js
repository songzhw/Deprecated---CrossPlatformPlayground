import React, { Component } from "react";
import { requireNativeComponent, StyleSheet, Text, View } from "react-native";

const BgScrollView = requireNativeComponent("BgScrollView");

class BridgeScrollViewScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.root}>
          <Text style={[styles.item, { backgroundColor: "green" }]}>BridgeScrollViewScreen Screen</Text>
          <Text style={[styles.item, { backgroundColor: "red" }]}>BridgeScrollViewScreen Screen222</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  item: {
    width: 344,
    height: 200
  }
});

export default BridgeScrollViewScreen;