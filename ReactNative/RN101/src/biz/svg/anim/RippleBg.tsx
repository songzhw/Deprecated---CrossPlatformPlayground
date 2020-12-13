import React, { useEffect, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated, useWindowDimensions, Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { rotateX } from "../../../utils/TransformUtils";

interface IProps extends ViewProps {
}

const AnimCircle = Animated.createAnimatedComponent(Circle);
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const RippleBg = (props: IProps) => {
  const [radius, setRadius] = useState(new Animated.Value(0.1));
  // const [radius, setRadius] = useState(0);
  const [strokeWidth, setStrokeWidth] = useState(10);

  useEffect(() => {
    // animValue.addListener(({ value }) => {
    //   setRadius(value * windowWidth);
    //   setStrokeWidth(value * 15);
    // });

    runAnimation();
  }, []);

  const runAnimation = () => {
    // animValue.setValue(0.1);

    Animated.timing(radius, { toValue: windowWidth, duration: 3000, useNativeDriver: true })
      .start();
  };

  return (
    <Svg style={props.style}>
      <AnimCircle x={windowWidth / 2} y={windowHeight / 2} r={radius}
                  strokeWidth={strokeWidth} stroke={"white"}
      />
    </Svg>
  );
};


const styles = StyleSheet.create({});
