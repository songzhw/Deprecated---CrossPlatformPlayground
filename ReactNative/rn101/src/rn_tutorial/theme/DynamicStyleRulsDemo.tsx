import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";

interface IProps extends ViewProps {
  fontSize?: number
}

export const DynamicStyleRulesDemo = (props: IProps) => {

  const textStyle = (props: any) => ({
    fontSize: props.fontSize * 2,
    color: "blue"
  });
  const styles = parseStyle(textStyle, props);

  return (
    <View>
      <Text style={{ fontSize: 20, color: "blue" }}> 动态样式 </Text>
    </View>
  );
};

DynamicStyleRulesDemo.defaultProps = {
  fontSize: 10
};


// const styles = StyleSheet.create({
//   container: {}
// });

function parseStyle(fn: (...args: any[]) => any, props: any) {
  const result = fn(props);  //=>  { fontSize: 20, color: 'blue' }
  return StyleSheet.create(result);
}
