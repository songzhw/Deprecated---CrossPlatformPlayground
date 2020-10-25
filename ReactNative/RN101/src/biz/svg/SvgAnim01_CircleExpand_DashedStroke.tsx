import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated, TouchableWithoutFeedback } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

// DESP: 圆变大的动画. 关键是虚线stroke也变多了, 但siz与gap仍不变!

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const SvgAnim01_CircleExpand_DashedStroke = () => {
  const [radius, setRadius] = useState(new Animated.Value(38));

  const anim = () => {
    // Animated.timing(radius, { toValue: 180, duration: 2000, useNativeDriver: true })
    Animated.spring(radius, {toValue: 180, useNativeDriver: true, tension: 1, friction: 12})
      .start();
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={anim}>
        <Svg height="100%" width="100%" style={{ backgroundColor: "grey" }}>
          <G fill="none">
            <AnimatedCircle
              cx={200} cy={300} r={radius} fill="#e3eff3"
              stroke="#0078FF" strokeWidth="5" strokeDasharray="28,25"
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
