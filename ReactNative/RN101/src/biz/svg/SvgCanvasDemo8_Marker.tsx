import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Defs, Line, Marker, Path, Symbol } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvasDemo8_Marker = (props: IProps) => {

  return (
    <View>
      <Svg>
        <Defs>
          <Marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto"  >
            <Path d="M0,0 L0,6 L9,3 z" fill="#f00"/>
          </Marker>
        </Defs>

        <Symbol id="a2" width={10} height={10}>
          <Path d="M0,0 L0,6 L9,3 z" fill="#f00"/>
        </Symbol>

        <Line x1="50" y1="100" x2="250" y2="100" stroke="#000" strokeWidth="5" markerEnd="url(#arrow)"/>
        <Line x1="295" y1="150" x2="95" y2="195" stroke="#000" strokeWidth="5" markerEnd="url(#arrow)"/>

        <Line x1="50" y1="300" x2="250" y2="300" stroke="#000" strokeWidth="5" markerEnd="url(#symbol)"/>
        <Line x1="295" y1="350" x2="95" y2="395" stroke="#000" strokeWidth="5" markerEnd="url(#a2)"/>


      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  root: {}
});
