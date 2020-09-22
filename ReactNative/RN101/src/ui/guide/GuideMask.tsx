import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { ClipPath, Defs, Image, LinearGradient, Path, Rect, Stop } from "react-native-svg";

interface IProps extends ViewProps  {

}

export const GuideMask = (props: IProps) => {

  return (
    <Svg style={styles.container}>
      <Defs>
        <ClipPath id="clipPath">
          <Path fill="white" stroke="gray" strokeWidth="3"
                d="M10 10 H 90 V 90 H 10 L 10 10"/>
        </ClipPath>
      </Defs>

      <Rect x={100} y={40} width={200} height={80} clipPath="url(#clipPath)" fill="red"/>
    </Svg>
  )
}


const styles = StyleSheet.create({
  container: {...StyleSheet.absoluteFillObject, backgroundColor: "#000a"}
});
