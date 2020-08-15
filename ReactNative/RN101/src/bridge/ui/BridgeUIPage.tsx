import React from "react";
import { View, ViewProps, Text, StyleSheet, SafeAreaView } from "react-native";
import { RippleBgView } from "../bridges";

interface IProps extends ViewProps  {}

export const BridgeUIPage = (props: IProps) => {

  return (
    <SafeAreaView>
      <RippleBgView style={{width:100, height: 100}}/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {}
});