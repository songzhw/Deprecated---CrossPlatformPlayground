import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvasDemo1 = (props: IProps) => {

  // absoluteFill的样式, 就是absolute, 并且left/right/top/bottom全是0
  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="45"
                stroke="blue" strokeWidth="2.5"
                fill="green"/>
        <Rect x="15" y="15"
              width="70" height="70"
              stroke="red" strokeWidth="2"
              fill="yellow"/>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: "center", justifyContent: "center"
  }
});