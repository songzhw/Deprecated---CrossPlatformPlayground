import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Defs, Line, Marker, Path } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvasDemo8_Marker = (props: IProps) => {

  return (
    <View>
      <Svg width="600px" height="100px">
        <Defs>
          <Marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth" orient="auto">
            <Path d="M0,0 L0,6 L9,3 z" fill="#f00"/>
          </Marker>
        </Defs>
        <Line x1="50" y1="50" x2="250" y2="50" stroke="#000" strokeWidth="5" markerEnd="url(#arrow)"/>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  root: {}
});
