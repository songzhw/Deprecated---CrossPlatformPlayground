import React from "react";
import { View, ViewProps, Text, StyleSheet, Button, Animated } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface IProps extends ViewProps {
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const SvgAnimDemo2 = (props: IProps) => {
  const radius = 65;
  const circumference = 2 * radius * Math.PI;  // 总周长

  const startAnim = () => {

  };

  const resetAnim = () => {

  };

  return (
    <View>
      <Button title={"start anim"} onPress={startAnim}/>
      <View style={{ width: 1, height: 10 }}/>
      <Button title={"reset anim"} onPress={resetAnim}/>

      <Svg width={360} height={360} style={{ backgroundColor: "gray" }}>
        <Circle
          x={80} y={80} r={radius}
          fill="green"/>
        <Circle
          x={250} y={80} r={radius}
          fill="green" stroke="red" strokeWidth={5}
          strokeDasharray={"20 6"} strokeDashoffset={-200}/>


      </Svg>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});