import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class FlexThreePropsScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title} numberOfLines={1}>箱根温泉</Text>
        <Text style={styles.flags} numberOfLines={1}>温泉</Text>
        <Text style={styles.price} numberOfLines={1}>FlexThreePropsScreen Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // 一个红色边框, 表示边界
  root: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#E91e63"
  },
  title: {},
  flags: {},
  price: {
    backgroundColor: "#90caf9",
    textAlign: "right"
  }
});

export default FlexThreePropsScreen;