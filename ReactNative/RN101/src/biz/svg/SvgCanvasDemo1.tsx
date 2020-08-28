import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvasDemo1 = (props: IProps) => {

  // absoluteFill的样式, 就是absolute, 并且left/right/top/bottom全是0
  return (
      <Svg height="300" width="200" viewBox="0 0 100 100" style={{backgroundColor: "gray"}}>
        <Rect x="15" y="15"
              width="70" height="70"
              stroke="red" strokeWidth="2"
              fill="yellow"/>
      </Svg>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: "center", justifyContent: "center"
  }
});