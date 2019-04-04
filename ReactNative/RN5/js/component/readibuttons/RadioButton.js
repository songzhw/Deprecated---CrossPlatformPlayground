import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const RadioButton = ({ text, circleSize = 24, textSize = 20 }) => {
  const outterCircleStyle = {
    width: circleSize,
    height: circleSize,
    borderWidth: circleSize * 0.1,
    borderRadius: circleSize / 2,
    borderColor: "blue"
  };

  const innerCircleStyle = {};

  const textStyle = {
    fontSize: textSize,
    color: "black",
    marginLeft: circleSize / 3
  };

  return (
    <View style={styles.root}>
      <View style={outterCircleStyle}/>
      <Text style={textStyle}>radio button</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row"
  }
});
