import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import { RippleBgView } from "../bridges";

interface IProps extends ViewProps  {}

export const BridgeUIPage = (props: IProps) => {

  return (
    <View>
      <RippleBgView/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {}
});