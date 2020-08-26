import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import { SemiCircleProgressView } from "../../ui/circle/SemiCircleProgressView";

interface IProps extends ViewProps  {}

export const SemiCircleDemo = (props: IProps) => {

  return (
    <View>
        <SemiCircleProgressView radius={100} bg="grey"/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {}
});