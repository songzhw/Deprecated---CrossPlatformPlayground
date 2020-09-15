import React, { ReactNode } from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";

interface IProps extends ViewProps  {
  // children?: ReactNode //太全面了, 我现在只要一个就行了
  children: Element
}

export const BadgerBox = (props: IProps) => {

  return (
    <View>
      {props.children}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {}
});
