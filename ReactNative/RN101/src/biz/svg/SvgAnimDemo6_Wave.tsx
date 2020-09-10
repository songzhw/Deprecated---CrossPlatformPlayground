import React from "react";
import { View, ViewProps, Animated, Easing, StyleSheet } from "react-native";
import { WaveView } from "../../ui/svg/WaveView";


interface IProps extends ViewProps  {}

export const SvgAnimDemo6_Wave = (props: IProps) => {

  return (
    <View>
      <WaveView/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {}
});