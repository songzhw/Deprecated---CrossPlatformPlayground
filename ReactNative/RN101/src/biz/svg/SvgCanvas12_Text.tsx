import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Text } from "react-native-svg";

interface IProps extends ViewProps  {}

export const SvgCanvas12_Text = (props: IProps) => {

  return (
    <Svg style={{backgroundColor: "gray"}}>
      <Text x={0} y={0} fill="red">Invisible Font (xyz)</Text>
    </Svg>
  )
}


const styles = StyleSheet.create({
  root: {}
});
