import React from "react";
import { View, ViewProps, Text, StyleSheet, Image } from "react-native";

interface IProps extends ViewProps {
  fontSize?: number,
  imgSize?: number
}

export const DynamicStyleRulesDemo = (props: IProps) => {

  const rawStyles = (props: any) => ({
    text: {
      fontSize: props.fontSize * 2,
      color: "green"
    }
  });
  const styles = parseStyle(rawStyles, props);

  return (
    <View>
      <Text style={styles.text}> 动态样式 </Text>
    </View>
  );
};

DynamicStyleRulesDemo.defaultProps = {
  fontSize: 10,
  imgSize: 99
};


function parseStyle(fn: (...args: any[]) => any, props: any) {
  const result = fn(props);  //=>  { text: { fontSize: 20, color: 'blue' } }
  return StyleSheet.create(result);
}
