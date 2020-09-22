import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

interface IProps extends ViewProps  {

}

export const GuideMask = (props: IProps) => {

  return (
    <Svg style={styles.container}>
      <Rect x={100} y={40} width={200} height={80} fill="white"/>
    </Svg>
  )
}


const styles = StyleSheet.create({
  container: {...StyleSheet.absoluteFillObject, backgroundColor: "#000a"}
});
