import React from "react";
import { View, ViewProps, StyleSheet, Button } from "react-native";
import Svg, { Circle, ClipPath, Defs, Text, Path, Rect, Use, TSpan } from "react-native-svg";

// TODO 真的没有看出这个clipPath的clipRule有什么不同
export const SvgCanvas16_ClipPath = () => {

  // Defs中的Path本身是一个五角形
  return (
    <View>
      <Svg style={{ marginTop: 100 }}>
        <Defs>
          <Path d="M50,0 21,90 98,35 2,35 79,90z" id="star"/>
          <ClipPath id="emptyStar">
            <Use href="#star" clipRule="evenodd"/>
          </ClipPath>
          <ClipPath id="filledStar">
            <Use href="#star" clipRule="nonzero"/>
          </ClipPath>

          <ClipPath id="path3">
            <Text x={30} y={130} fontSize={50}>The quick brown fox
              <TSpan x={30} dy={40}>jumps over the lazy dog</TSpan>
            </Text>
          </ClipPath>
        </Defs>

        {/*五角形  (应用前两个ClipPath) */}
        <Rect width={50} height={200} x={0} y={0} fill={"#f9c"}
              clipPath="url(#emptyStar)"/>
        <Rect width={200} height={200} x={50} y={0} fill={"#9c6"}
              clipPath="url(#emptyStar)"/>

        {/* 字体 (应用第三个ClipPath) */}
        <Circle x={80} y={150} r={50} fill="red" clipPath="url(#path3)"/>
      </Svg>


    </View>
  );
};


const styles = StyleSheet.create({
  root: {}
});
