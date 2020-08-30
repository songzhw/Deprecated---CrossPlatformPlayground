import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated, Easing } from "react-native";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface IProps extends ViewProps {
  radius: number;
}

export const CircleProgress = (props: IProps) => {
  const { radius } = props;
  const size = 2 * radius + 30;
  const circumference = 2 * radius * Math.PI;  // 总周长
  const [progress, setProgress] = useState(new Animated.Value(0));  // 倒计时动画进度

  const startAnim = () => {
    Animated.timing(progress, {
      toValue: circumference,
      duration: 1500,
      useNativeDriver: true,
      easing: Easing.linear
    }).start();
  };

  const resetAnim = () => {
    progress.stopAnimation();  // 停止当前动画
    progress.setValue(0);  // 重置动画值
  };

  return (
    <Svg width={size} height={size}>
      <AnimatedCircle
        x={size/2} y={size/2} r={radius}
        fill={"none"}
        stroke="blue" strokeWidth={4}
        strokeDasharray={`${circumference}`}
        strokeDashoffset={progress}/>
    </Svg>
  );
};


const styles = StyleSheet.create({
  container: {}
});