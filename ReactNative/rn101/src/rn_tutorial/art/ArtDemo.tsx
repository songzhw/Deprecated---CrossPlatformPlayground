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

  const circle = new Path();
  circle.moveTo(50, 1)
    .arc(0, 99, 25)
    .arc(0, -99, 25)
    .close();

  const circle2 = new Path();
  circle.moveTo(150, 1)
    .arc(100, 199, 25)
    .arc(100, 1, 25)
    .close();

  return (
    <View>
      <Surface width={360} height={300}>
        <Shape d={path} stroke="#000000" strokeWidth={4}/>
        <Shape d={path2} stroke="#000000" strokeWidth={2} strokeDash={[8, 10]}/>
        <Shape d={circle} stroke="#132456" strokeWidth={4} fill="#af8d2d"/>
      </Surface>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});