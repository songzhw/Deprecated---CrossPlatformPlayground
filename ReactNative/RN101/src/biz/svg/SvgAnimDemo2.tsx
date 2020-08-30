import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Button, Animated, Easing } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface IProps extends ViewProps {
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const SvgAnimDemo2 = (props: IProps) => {
  const radius = 65;
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
    <View>
      <Button title={"start anim"} onPress={startAnim}/>
      <View style={{ width: 1, height: 10 }}/>
      <Button title={"reset anim"} onPress={resetAnim}/>

      <Svg width={360} height={560} style={{ backgroundColor: "gray" }}>
        <Circle
          x={80} y={80} r={radius}
          fill="green"/>
        <Circle
          x={250} y={80} r={radius}
          fill="green" stroke="red" strokeWidth={5}
          strokeDasharray={"20 6"}/>

        <Circle
          x={80} y={240} r={radius}
          fill="green" stroke="red" strokeWidth={5}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={-140}/>

        <Circle
          x={240} y={240} r={radius}
          fill="green" stroke="red" strokeWidth={5}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={-140} rotation={270}/>

        <AnimatedCircle
            x={80} y={400} r={radius}
            fill="#f5a634" stroke="#0736cd" strokeWidth={5}
            strokeDasharray={`${circumference}`}
            strokeDashoffset={progress} rotation={-90}/>
      </Svg>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});