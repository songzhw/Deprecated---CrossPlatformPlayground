import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated, useWindowDimensions } from "react-native";
import { Circle } from "react-native-svg";

interface IProps extends ViewProps {
}

const AnimCircle = Animated.createAnimatedComponent(Circle);
const windowWidth = useWindowDimensions().width;
const windowHeight = useWindowDimensions().height;
export const RippleBg = (props: IProps) => {
  const [radius, setRadius] = useState(50);

  return (
    <View>
      <AnimCircle x={windowWidth / 2} y={windowHeight / 2} r={radius}/>
    </View>
  );
};


const styles = StyleSheet.create({
  root: {}
});
