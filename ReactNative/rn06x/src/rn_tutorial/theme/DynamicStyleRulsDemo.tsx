import React from "react";
import { View, ViewProps, Text, StyleSheet, Image } from "react-native";
import { parseStyle } from "../../core/theme/DynamicThemeUtils";
import { DarkTheme } from "../../core/theme/data/DarkTheme";
import { NormalTheme } from "../../core/theme/data/NormalTheme";

interface IProps extends ViewProps {
  fontSize?: number,
  imgSize?: number
}

export const DynamicStyleRulesDemo = (props: IProps) => {
  const rawStyles = (params: any, theme: any) => ({
    text: {
      fontSize: params.fontSize * 2,
      color: theme.text.title.color
    },
    image: {
      width: params.imgSize,
      height: params.imgSize
    }
  });
  const styles = parseStyle(rawStyles, props, NormalTheme);

  return (
    <View>
      <Text style={styles.text}> 动态样式 </Text>
      <Image style={styles.image} source={require("../../../res/images/category_app.png")}/>
    </View>
  );
};

DynamicStyleRulesDemo.defaultProps = {
  fontSize: 10,
  imgSize: 99
};



