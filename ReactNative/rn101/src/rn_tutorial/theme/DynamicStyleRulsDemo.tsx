import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";

interface IProps extends ViewProps {
}

export const DynamicStyleRulesDemo = (props: IProps) => {

  const textStyle = (props: any) => ({
    fontSize: props.fontSize * 2,
    color: "blue"
  });

  return (
    <View>
      <Text> 动态样式 </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});


