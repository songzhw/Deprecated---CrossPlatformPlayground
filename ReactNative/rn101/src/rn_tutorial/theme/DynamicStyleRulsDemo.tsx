import React from "react";
import { View, ViewProps, Text, StyleSheet, Image } from "react-native";

interface IProps extends ViewProps {
  fontSize?: number,
  imgSize?: number
}

export const DynamicStyleRulesDemo = (props: IProps) => {
  const normalTheme = { text: { title: { color: "blue" } } };
  const darkTheme = { text: { title: { color: "red" } } };

  const rawStyles = (props: any, theme: any) => ({
    text: {
      fontSize: props.fontSize * 2,
      color: theme.text.title.color
    },
    image: {
      width: props.imgSize,
      height: props.imgSize
    }
  });
  const styles = parseStyle(rawStyles, props, darkTheme);

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


function parseStyle(fn: (...args: any[]) => any, props: any, theme: any) {
  const result = fn(props, theme);  //=>  { text: { fontSize: 20, color: 'blue' } }
  return StyleSheet.create(result);
}
