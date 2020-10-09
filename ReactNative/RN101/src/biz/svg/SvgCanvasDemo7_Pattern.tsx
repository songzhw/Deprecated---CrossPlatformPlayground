import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Circle, Defs, Ellipse, Path, Pattern } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvasDemo7_Pattern = (props: IProps) => {

  // patternUnits: 可选值为 'userSpaceOnUse' | 'objectBoundingBox';
  return (
    <Svg width="100%" height="100%">

      <Defs>
        <Pattern id="ptn" patternUnits="userSpaceOnUse"
                 width={20} height={20} x={10} y={10}>
          <Circle cx={10} cy={10} r={10} stroke="none" fill="#393"/>
        </Pattern>
      </Defs>

      <Ellipse cx={200} cy={200} rx={140} ry={70} stroke="black"
               fill="url(#ptn)"/>

      <Ellipse cx={200} cy={400} rx={140} ry={70}
               stroke="url(#ptn)" strokeWidth={20}/>
    </Svg>
  );
};


const styles = StyleSheet.create({
  root: {}
});
