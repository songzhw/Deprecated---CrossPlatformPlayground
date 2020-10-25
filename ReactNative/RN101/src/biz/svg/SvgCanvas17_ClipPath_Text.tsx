import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Circle, ClipPath, Defs, G, Polygon, Text } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvas17_ClipPath_Text = (props: IProps) => {

  return (
    <Svg style={{ marginTop: 30 }}>
      <Defs>
        <ClipPath id="ctext">
          <Text x="50" y="133" fontWeight="bold" fontSize={60} >Clipping Path</Text>
        </ClipPath>
      </Defs>

      <G clipPath="url(#ctext)">
        <Polygon points="160 60, 420 110, 160,160" fill="#c99"/>
        <Circle cx="110" cy="110" r="68" fill="#9c6"/>
      </G>
    </Svg>
  );
};


const styles = StyleSheet.create({
  root: {}
});
