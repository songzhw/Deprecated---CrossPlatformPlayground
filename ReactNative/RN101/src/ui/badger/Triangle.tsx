import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";

interface IProps extends ViewProps {
  width: number;
  height: number;
  color: string;
}

export const Triangle = (props: IProps) => {
  const { width, height, color } = props;

  return (
    <View
      style={[
        styles.triangle,
        {
          width,
          height,
          borderRightWidth: width * 0.5,
          borderBottomWidth: height,
          borderLeftWidth: width * 0.5,
          borderColor: color
        }
      ]}
    />
  );
};


const styles = StyleSheet.create({
  triangle: {
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderTopWidth: 0
  }
});