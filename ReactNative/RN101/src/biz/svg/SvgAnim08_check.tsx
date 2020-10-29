import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

interface IProps extends ViewProps  {}

export const SvgAnim08_check = (props: IProps) => {

  return (
    <Svg viewBox="0 0 24 24" width={240} height={240}>
      <Path d="M9 16.2 L4.8 12 l-1.4 1.4 L9 19 21 7 l-1.4 -1.4 z" fill={"red"}/>
      <Circle x={9} y={16.2} r={1} fill="blue"/>
      <Circle x={4.8} y={12} r={1} fill="yellow"/>
      <Circle x={9} y={19} r={1} fill="green"/>
      <Circle x={21} y={7} r={1} fill="gray"/>
    </Svg>
  )
}


const styles = StyleSheet.create({
  root: {}
});
