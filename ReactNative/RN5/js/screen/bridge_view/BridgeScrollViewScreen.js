import React, { Component } from "react";
import { requireNativeComponent, StyleSheet, Text, View } from "react-native";

const BgScrollView = requireNativeComponent("BgScrollView");

class BridgeScrollViewScreen extends Component {
  render() {
    return (
      <BgScrollView style={styles.root} bgColor="#e12ca9">
        <View style={{ width: 350, height: 900, backgroundColor: "transparent" }}>
          <Text style={[styles.item, { backgroundColor: "red" }]}>BridgeScrollViewScreen Screen</Text>
          <Text style={[styles.item, { backgroundColor: "pink" }]}>BridgeScrollViewScreen Screen222</Text>
        </View>
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
    height: 500,
    backgroundColor: "green"
  }
});

export default BridgeScrollViewScreen;