import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ text, style, textStyle }) => {
  return (
    <TouchableOpacity style={style}>
      <Text style={[builtInTextStyle, textStyle]}> {text} </Text>
    </TouchableOpacity>
  );
};

const builtInTextStyle = {
  flex: 1,
  textAlign: "center",
  textAlignVertical: "center",
  fontSize: 18
};

export default Button;
