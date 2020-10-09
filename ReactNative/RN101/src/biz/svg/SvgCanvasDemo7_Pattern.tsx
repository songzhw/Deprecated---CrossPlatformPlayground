import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Defs, Ellipse, Path, Pattern } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvasDemo7_Pattern = (props: IProps) => {

  // patternUnits: 可选值为 'userSpaceOnUse' | 'objectBoundingBox';
  return (
    <Svg width="100%" height="100%">

      <Defs>
        <Pattern id="ptn" patternUnits="objectBoundingBox"
                 x={0} y={0} width={100} height={100}>
          <Path d="M 0 0 L 7 0 L 3.5 7 z" fill="gray" stroke="blue"/>
        </Pattern>
      </Defs>

      <Ellipse cx={200} cy={100} rx={150} ry={70} stroke="black"
               fill="url(#ptn)"
        />

    </Svg>
  );
};


const styles = StyleSheet.create({
  root: {}
});
