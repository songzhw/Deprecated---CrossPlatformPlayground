import React, { ReactNode } from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";

const hyp = (a: number, b:number) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

interface IProps extends ViewProps {
  // children?: ReactNode //太全面了, 我现在只要一个就行了
  children: Element
}

export const BadgerBox = (props: IProps) => {
  return (
    <View style={styles.container}>
      {props.children}
      <View style={[styles.maskSize, styles.maskAnim]}>
        <Text testID="label" style={[ styles.labelText]}>New</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    overflow: "hidden"
  },
  maskSize: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,  /* 这里即使是absolute式的全屏, 那就可以不写width与height. 它们就默认和parent一样大了*/
    alignItems: "center" /*因为label长377, mask这个parent长300, 所以要让文字居中才行*/
  },
  maskAnim: {
    transform: [
      { translateX: 160 },
      { translateY: -100 },
      { rotate: "45deg" },
      { translateY: 140 }
    ]
  },
  labelText: {
    width: 377,  /*377是320^2 + 200 ^2的平方根*/
    backgroundColor: "#ccccccaa",
    color: "white",
    fontSize: 20,
    textAlign: "center", /*水平居中*/
    lineHeight: 50 /*垂直居中. 主要复用了lineHeight与height同样高度*/
  }
});
