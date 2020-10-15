import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";

// [结论]
// 1. 超出<svg>的部分不会被渲染
// 2. (0,0)点就在<svg>左上角

interface IProps extends ViewProps {
}

export const SvgCanvas11_CoordinateSystem = (props: IProps) => {

  return (
    <View>
      <Svg style={{ marginLeft: 50, marginTop: 50, backgroundColor: "gray" }}>
        <Circle cx={100} cy={100} r={100} fill="skyblue"/>
        <Rect x={-100} y={-50} width={120} height={70} fill="red"/>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  root: {}
});
