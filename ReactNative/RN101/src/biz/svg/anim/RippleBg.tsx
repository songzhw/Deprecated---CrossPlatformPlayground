import React, { useEffect, useRef, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated, useWindowDimensions, Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { rotateX } from "../../../utils/TransformUtils";

interface IProps extends ViewProps {
}

const AnimCircle = Animated.createAnimatedComponent(Circle);
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const RippleBg = (props: IProps) => {
  const [animValue, setAnimValue] = useState(new Animated.Value(0.1));
  const [radius, setRadius] = useState(0);
  const [strokeWidth, setStrokeWidth] = useState(0);
  const lastRef = useRef(0.1)

  useEffect(() => {
    animValue.addListener(({ value }) => {
      const last = lastRef.current
      const bigEnoughToRunAnim = (value - last) > 0.05
      if(bigEnoughToRunAnim) {
        console.log(`szw : last = `, last)
        setRadius(value * windowWidth);
        lastRef.current = value
      }

      // setStrokeWidth(value * 15);
    });

    runAnimation();
  }, []);

  const runAnimation = () => {
    lastRef.current = 0
    animValue.setValue(0.1);

    Animated.timing(animValue, { toValue: 1, duration: 3000, useNativeDriver: true })
      .start(()=> runAnimation());
  };

  return (
    <Svg style={props.style}>
      <AnimCircle x={windowWidth / 2} y={windowHeight / 2} r={radius}
                  strokeWidth={10} stroke={"white"}
      />
    </Svg>
  );
};


const styles = StyleSheet.create({});
