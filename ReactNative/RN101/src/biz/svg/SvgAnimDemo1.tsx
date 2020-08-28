import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated, TouchableWithoutFeedback } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface IProps extends ViewProps {
}

export const SvgAnimDemo1 = (props: IProps) => {
  const [radius, setRadius] = useState(new Animated.Value(38));

  const anim = () => {
    // @ts-ignore
    Animated.spring(radius, { toValue: 245 })
      .start();
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={anim}>
        <Svg height="100%" width="100%" style={{ backgroundColor: "grey" }}>
          <G fill="none">
            <AnimatedCircle
              cx={160} cy={220} r={radius} fill="white"
              stroke="#0078FF" strokeWidth="3" strokeDasharray="28,25"
            />
          </G>
        </Svg>
      </TouchableWithoutFeedback>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});