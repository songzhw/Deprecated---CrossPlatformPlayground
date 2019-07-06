import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
// @ts-ignore
import { Path, Shape, Surface } from "@react-native-community/art";

interface IProps extends ViewProps {
}

export const ArtDemo = (props: IProps) => {
  const path = new Path();
  path.moveTo(100, 100);
  path.lineTo(300, 100);

  return (
    <View>
        <Shape d={path} stroke="#000000" strokeWidth={4}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});