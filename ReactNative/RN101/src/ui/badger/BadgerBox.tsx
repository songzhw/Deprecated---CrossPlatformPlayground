import React from "react";
import { View, ViewProps, Text, StyleSheet, LayoutChangeEvent } from "react-native";

const hyp = (a: number, b: number) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

interface IProps extends ViewProps {
  // children?: ReactNode //太全面了, 我现在只要一个就行了
  children: Element;
  width: number;
  height: number;
  gap: number;
  labelBg: string;
  labelTextColor: string;
  labelTextHeight: number;
  labelTextSize: number;
}

export const BadgerBox = (props: IProps) => {

  // 参数是一个内容很多的对象, 我们只取其中的nativeEvent
  // nativeEvent的一个案例: "nativeEvent": {"layout": {"height": 200, "width": 320, "x": 0, "y": 0}, "target": 9}
  const onLayout = (arg: LayoutChangeEvent) => {
    const { layout } = arg.nativeEvent;
    console.log(`szw onLayout `, layout);
  };

  const { width, height, gap, labelBg, labelTextColor, labelTextHeight, labelTextSize } = props;
  const labelWidth = hyp(width, height);
  const dynamicStyles = StyleSheet.create({
    maskAnim: {
      transform: [
        { translateX: 0.5 * width },
        { translateY: -0.5 * height },
        { rotate: "45deg" },
        { translateY: 0.5 * (height + gap) }
      ]
    },
    labelText: {
      width: labelWidth,
      backgroundColor: labelBg,
      color: labelTextColor,
      fontSize: labelTextSize,
      textAlign: "center", /*水平居中*/
      lineHeight: labelTextHeight /*垂直居中. 没有height时, height就等于lineHeight. 这样子就成中了*/
    }
  });

  return (
    <View style={styles.container}>
      {props.children}
      <View style={[styles.maskSize, dynamicStyles.maskAnim]} onLayout={onLayout}>
        <Text testID="label" style={dynamicStyles.labelText}>New</Text>
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
  }
});
