import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { ClipPath, Defs, Mask, Rect } from "react-native-svg";


export const SvgCanvasDemo6 = () => {

  return (
    <View >
      <Svg >
        <Defs>
          <Mask id="mask1">
            <Rect x={0} y={0} width={50} height={50} fill="#fff"/>
          </Mask>
          <Mask id="mask2">
            <Rect  x={50} y={0} width={50} height={50} fill="#aaa"/>
          </Mask>
          <Mask id="mask3">
            <Rect x={100} y={0} width={50} height={50} fill="#888"/>
          </Mask>
          <Mask id="mask4">
            <Rect  x={150} y={0} width={50} height={50} fill="#222"/>
          </Mask>
          <ClipPath id="mask5">
            <Rect  x={200} y={0} width={50} height={50} fill="#111"/>
          </ClipPath>
        </Defs>

        <Rect x={0} y={0}   width={50} height={50} fill="#f00" mask="url(#mask1)"  />
        <Rect x={50} y={0}  width={50} height={50} fill="#f00" mask="url(#mask2)"/>
        <Rect x={100} y={0} width={50} height={50} fill="#f00" mask="url(#mask3)"/>
        <Rect x={150} y={0} width={50} height={50} fill="#f00" mask="url(#mask4)"/>
        {/*从这里看出Mask与ClipPath的区别!*/}
        <Rect x={200} y={0} width={50} height={50} fill="#f00" mask="url(#mask5)"/>

      </Svg>
    </View>
  );
};


