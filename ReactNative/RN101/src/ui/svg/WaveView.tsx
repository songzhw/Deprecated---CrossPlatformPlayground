import React from "react";
import { View, ViewProps, StyleSheet, Animated } from "react-native";
import Svg from "react-native-svg";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

interface IProps extends ViewProps {
}

export const WaveView = (props: IProps) => {

  return (
    <View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});