import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const FlexThreePropsScreen = () => (
  <View style={styles.root}>
    <Text style={styles.title} numberOfLines={1}>箱根温泉箱根温泉箱根温泉箱根温泉箱根温泉</Text>
    <Text style={styles.flags} numberOfLines={1}>温泉</Text>
    <Text style={styles.price} numberOfLines={1}>FlexThreePropsScreen Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  // 一个红色边框, 表示边界
  root: {
    height: 50,
    margin: 20,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#E91e63"
  },
  title: {
    flexShrink: 1,
    backgroundColor: "#ff9800"
  },
  flags: {
    flexShrink: 1,
    backgroundColor: "#7e57c2"
  },
  price: {
    flexShrink: 1,
    backgroundColor: "#90caf9"
  }
});

export default FlexThreePropsScreen;