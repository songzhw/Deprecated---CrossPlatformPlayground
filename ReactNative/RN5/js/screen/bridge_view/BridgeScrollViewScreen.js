import React, { Component } from "react";
import { requireNativeComponent, StyleSheet, Text, View } from "react-native";

const BgScrollView = requireNativeComponent("BgScrollView");

class BridgeScrollViewScreen extends Component {
  render() {
    return (
      <BgScrollView style={styles.root} bgColor="#e12ca9">
        <Text style={styles.item}>BridgeScrollViewScreen Screen</Text>
      </BgScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  item: {
    width: 344,
    height: 2500,
    backgroundColor: "green"
  }
});

export default BridgeScrollViewScreen;