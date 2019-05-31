import React from "react";
import { AppRegistry, Text, TextInput, PixelRatio, Platform } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

// 全局定制字体1: 不让字体大小跟随手机字体设置的变化
const TextRender = Text.render;
Text.render = function(...args) {
  const originalText = TextRender.apply(this, args);
  return React.cloneElement(originalText, { allowFontScaling: false });
};

// 全局定制字体2: 下面代码设置<TextInput>, 但是没成功
// const TextInputRender = TextInput.render;
// TextInput.render = function(...args) {
//   const originalTextInput = TextInputRender.apply(this, args);
//   const { style } = originalTextInput.props;
//   const currentFontSize = style.fontSize;
//   const newFontSize = setResponsiveFontForTextInput(currentFontSize);
//   console.log(`szw , curr = ${currentFontSize}, new = ${newFontSize}`);
//   return React.cloneElement(
//     originalTextInput,
//     { allowFontScaling: Platform.OS === "android", style: { ...style, fontSize: newFontSize } }
//   ); //为iOS平台, 就设为false;
// };

// @parm fontSize: number
function setResponsiveFontForTextInput(fontSize) {
  return Platform.OS === "android" ? fontSize / PixelRatio.getFontScale() : fontSize;
}

AppRegistry.registerComponent(appName, () => App);
