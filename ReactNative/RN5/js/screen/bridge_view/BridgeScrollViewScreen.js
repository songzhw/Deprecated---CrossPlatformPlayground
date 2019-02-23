import React, { Component } from "react";
import { requireNativeComponent, StyleSheet, Text } from "react-native";

const BgScrollView = requireNativeComponent("BgScrollView");

class BridgeScrollViewScreen extends Component {
  render() {
    return (
      <BgScrollView style={styles.root} bgColor="#e12ca9">
        <Text>BridgeScrollViewScreen Screen</Text>
      </BgScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default BridgeScrollViewScreen;