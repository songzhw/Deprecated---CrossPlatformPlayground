import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Defs, Mask, Rect } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvasDemo6 = (props: IProps) => {

  return (
    <View >
      <Svg style={{backgroundColor: "gray"}}>
        <Defs>
          <Mask id="mask1">
            <Rect x={0} y={0} width={50} height={50} fill="#fff"/>
          </Mask>
          <Mask id="mask2">
            <Rect x={0} y={0} width={50} height={50} fill="#aaa"/>
          </Mask>
          <Mask id="mask3"  x={0} y={0}  height="100%" width="100%">
            <Rect x={0} y={0} width={50} height={50} fill="white"/>
          </Mask>
          <Mask id="mask4">
            <Rect x={0} y={0} width={50} height={50} fill="#222"/>
          </Mask>
        </Defs>

        <Rect x={50} y={30} width={50} height={50} fill="#f00" mask="url(#mask1)"  />
        <Rect x={100} y={30} width={50} height={50} fill="#f00" />
        <Rect x={150} y={30} width={50} height={50} fill="#f00" mask="url(#mask3)"/>
        <Rect x={200} y={30} width={50} height={50} fill="#f00" />

      </Svg>
    </View>
  );
};


