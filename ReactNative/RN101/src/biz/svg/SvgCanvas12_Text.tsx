import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Circle, Rect, Text } from "react-native-svg";

interface IProps extends ViewProps  {}

export const SvgCanvas12_Text = (props: IProps) => {

  return (
    <Svg style={{backgroundColor: "gray"}}>
      <Text x={0} y={0} fill="red">Invisible Font (xyz)</Text>
      <Text x="0,20,40,60,70" y="0,20,40,60,70" fill="red">This xyz poly</Text>

      {/*这个rect做边界之用, 帮我们看清TextAnchor作用*/}
      <Rect x={100} y={100} width={200} height={200} stroke={"red"}/>
      <Text x={100} y={120} fontSize={20} fill="blue">Svg</Text>
      <Text x={100} y={140} fontSize={20} fill="blue" textAnchor={"middle"}>Svg</Text>
      <Text x={100} y={160} fontSize={20} fill="blue" textAnchor={"end"}>Svg</Text>
    </Svg>
  )
}

const styles = StyleSheet.create({
  root: {}
});
