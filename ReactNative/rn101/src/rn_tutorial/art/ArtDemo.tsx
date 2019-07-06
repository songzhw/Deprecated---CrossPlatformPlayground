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

  const path2 = new Path();
  path2.moveTo(50, 50);
  path2.lineTo(300, 50);

  return (
    <View>
      <Surface width={360} height={300}>
        <Shape d={path} stroke="#000000" strokeWidth={4}/>
        <Shape d={path2} stroke="#000000" strokeWidth={2} strokeDash={[8, 10]}/>
      </Surface>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});