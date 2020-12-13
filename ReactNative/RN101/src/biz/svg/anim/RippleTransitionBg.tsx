import React from "react";
import { View, ViewProps, Text, StyleSheet, Animated, useWindowDimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";


interface IProps extends ViewProps {
  color: string;
  nextColor: string;
  r: Animated.Value;
  cx: number;
  cy: number;
}

const AnimCircle = Animated.createAnimatedComponent(Circle);
export const RippleTransitionBg = (props: IProps) => {
  const { color, nextColor, r, cx, cy } = props;

  return (
    <Svg style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, backgroundColor: color }}>
      <AnimCircle cx={cx} cy={cy} r={r} fill={nextColor}/>
    </Svg>
  );
};


const styles = StyleSheet.create({
  root: {}
});
