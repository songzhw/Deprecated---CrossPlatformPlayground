import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Circle, Defs, Ellipse, Path, Pattern, Rect } from "react-native-svg";

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

        <Pattern id="p1" patternUnits="userSpaceOnUse"
                 width={8} height={8} x={2} y={2}>
          <Rect x={0} y={0} width={4} height={4} fill="#6a6"/>
        </Pattern>
        <Pattern id="p2" patternUnits="userSpaceOnUse"
                 width={50} height={50} x={10} y={10}>
          <Circle x={25} y={25} r={25} fill="url(#p1)"/>
        </Pattern>
      </Defs>

      <Ellipse cx={200} cy={200} rx={140} ry={70} stroke="black"
               fill="url(#ptn)"/>

      <Ellipse cx={200} cy={400} rx={140} ry={70}
               stroke="url(#ptn)" strokeWidth={20}/>

      <Rect x={50} y={530} width={300} height={150} fill="url(#p2)"/>
    </Svg>
  );
};


const styles = StyleSheet.create({
  root: {}
});
