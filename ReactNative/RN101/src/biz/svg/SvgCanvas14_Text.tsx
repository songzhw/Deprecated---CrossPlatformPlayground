import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Text } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvas14_Text = (props: IProps) => {

  return (
    <Svg>
      <Text fill="black" fontSize={22} x={20} y={80}  >Have you done writing?</Text>
      <Text fill="black" fontSize={22} x={20} y={140} kerning={-2}>Have you done writing?</Text>
      <Text fill="black" fontSize={22} x={20} y={200} kerning={2}>Have you done writing?</Text>
      <Text fill="black" fontSize={22} x={20} y={260} letterSpacing={2}>Have you done writing?</Text>
      <Text fill="black" fontSize={22} x={20} y={320} letterSpacing={-2}>Have you done writing?</Text>
      <Text fill="black" fontSize={22} x={20} y={380} wordSpacing={12}>Have you done writing?</Text>
    </Svg>
  );
};


const styles = StyleSheet.create({
  root: {}
});
