import React from "react";
import { Animated, Easing } from "react-native";
import { ScreenProps } from "react-navigation";

export const screenFade = () => ({
  transitionSpec: {
    duration: 100,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: (sceneProps: ScreenProps) => {
    const { layout, position, scene } = sceneProps;
    const { index } = scene;
    const height = layout.initHeight;
    const translateX = 0;
    const translateY = 0;
    const opacity = position.interpolate({
      inputRange: [index - 0.5, index],
      outputRange: [0.5, 1],
      extrapolate: "clamp"
    });
    return { opacity, transform: [translateY, translateX] };
  }
});