import React, { useEffect, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated, useWindowDimensions, Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface IProps extends ViewProps {
}

const AnimCircle = Animated.createAnimatedComponent(Circle);
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const RippleBg = (props: IProps) => {
  const [radius, setRadius] = useState(new Animated.Value(50));
  const [strokeWidth, setStrokeWidth] = useState(new Animated.Value(4.0));

  useEffect(() => {
    runAnimation();
  }, []);

  const runAnimation = () => {
    radius.setValue(50);
    strokeWidth.setValue(4);

    Animated.timing(radius, { toValue: windowHeight, duration: 3000, useNativeDriver: true })
      .start(() => runAnimation());
    Animated.timing(strokeWidth, { toValue: 15, duration: 3000, useNativeDriver: true })
      .start(() => runAnimation());
  };

  return (
    <Svg style={props.style}>
      <AnimCircle x={windowWidth / 2} y={windowHeight / 2} r={radius}
                  strokeWidth={5} stroke={"white"}
      />
    </Svg>
  );
};


const styles = StyleSheet.create({});
