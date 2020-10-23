import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Circle, ClipPath, Defs, Rect } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvas16_ClipPath = (props: IProps) => {

  return (
    <Svg>
      <Defs>
        <ClipPath id="clip1">
          <Circle x={110} y={160} r={50}/>
        </ClipPath>
      </Defs>
      <Rect x={25} y={125} width={200} height={100} fill={"#9c6"}
          clipPath="url(#clip1)" clipRule="nonzero"/>
      <Rect x={25} y={125} width={200} height={100} stroke={"#9c6"}/>
    </Svg>
  );
};


const styles = StyleSheet.create({
  root: {}
});
