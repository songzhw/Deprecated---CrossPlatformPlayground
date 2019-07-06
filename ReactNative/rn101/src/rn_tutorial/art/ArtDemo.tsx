import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
// @ts-ignore
import { Path, Shape, Surface } from "@react-native-community/art";

interface IProps extends ViewProps {
}

export const ArtDemo = (props: IProps) => {
  const path = new Path();
  path.moveTo(50, 20);
  path.lineTo(300, 20);

  return (
    <View>
      <Surface width={360} height={300}>
        <Shape d={path} stroke="#000000" strokeWidth={4}/>
      </Surface>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});