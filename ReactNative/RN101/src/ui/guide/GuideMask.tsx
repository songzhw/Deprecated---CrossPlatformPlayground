import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg from "react-native-svg";

interface IProps extends ViewProps  {}

export const GuideMask = (props: IProps) => {

  return (
    <Svg style={styles.container}>

    </Svg>
  )
}


const styles = StyleSheet.create({
  container: {...StyleSheet.absoluteFillObject, backgroundColor: "#000a"}
});
