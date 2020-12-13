import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated, useWindowDimensions, Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface IProps extends ViewProps {
}

const AnimCircle = Animated.createAnimatedComponent(Circle);
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const RippleBg = (props: IProps) => {
  const [radius, setRadius] = useState(new Animated.Value(50));

  return (
    <Svg style={props.style}>
      <AnimCircle x={windowWidth / 2} y={windowHeight / 2} r={radius}
                  strokeWidth={5} stroke={"white"}
      />
    </Svg>
  );
};


const styles = StyleSheet.create({});
