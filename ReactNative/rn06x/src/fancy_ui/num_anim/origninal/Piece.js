import { Text, View } from "react-native";
import React from "react";

/**
 *
 * @param children 子组件(文本内容)
 * @param style 样式
 * @param height 高度
 * @param textStyle 文本样式
 * @returns 无动画绘制文本
 * @constructor
 */
export const Piece = ({ children, style, height, textStyle }) => {
  return (
    <View style={style}>
      <Text style={[textStyle, { height }]}>{children}</Text>
    </View>
  );
};