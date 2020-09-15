import React, { ReactNode } from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";

interface IProps extends ViewProps {
  // children?: ReactNode //太全面了, 我现在只要一个就行了
  children: Element
}

export const BadgerBox = (props: IProps) => {

  return (
    <View>
      {props.children}
      <Text testID="label" style={[styles.label, styles.labelText]}>New</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {},
  label: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ccccccaa",
    height: 50
  },
  labelText: {
    color: "white",
    fontSize: 20,
    textAlign: "center", /*水平居中*/
    lineHeight: 50, /*垂直居中. 主要复用了lineHeight与height同样高度*/
   }
});
