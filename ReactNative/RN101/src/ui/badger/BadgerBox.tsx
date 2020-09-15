import React, { ReactNode } from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";

const hyp = (a: number, b:number) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

interface IProps extends ViewProps {
  // children?: ReactNode //太全面了, 我现在只要一个就行了
  children: Element
}

export const BadgerBox = (props: IProps) => {
  console.log(`size1 = `, hyp(320, 200))
  console.log(`size2 = `, hyp(160, 100))
  return (
    <View style={styles.container}>
      {props.children}
      <Text testID="label" style={[styles.label, styles.labelText, styles.labelAnim]}>New</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
  },
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
    lineHeight: 50 /*垂直居中. 主要复用了lineHeight与height同样高度*/
  },
  labelAnim: {
    transform: [
      { translateX: 160 },
      { translateY: -100 },
      { rotate: "45deg" },
      { translateY: 130 }
    ]
  }
});
