import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface IProps extends ViewProps  {}

export const SvgAnimDemo5 = (props: IProps) => {
  const [length, setLength] = useState(new Animated.Value(0));

  const anim = () => {
    // Animated.timing(radius, { toValue: 180, duration: 2000, useNativeDriver: true })
    Animated.spring(length, {toValue: 500, useNativeDriver: true, tension: 1, friction: 12})
      .start();
  };

  return (
    <Svg>
      <Circle x={200} y={100} r={70} fill="none"
              strokeWidth={5} stroke="blue" strokeDasharray={`${length} 1000`}/>
    </Svg>
  )
}


const styles = StyleSheet.create({
  container: {}
});