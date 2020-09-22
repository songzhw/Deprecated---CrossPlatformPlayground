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
          <Rect x={100} y={40} width={140} height={50}/>
        </ClipPath>
      </Defs>

      <Rect x={0} y={0} width={"100%"} height={"100%"} fill="#0005"/>
    </Svg>
  )
}


const styles = StyleSheet.create({
  container: {...StyleSheet.absoluteFillObject}
});
