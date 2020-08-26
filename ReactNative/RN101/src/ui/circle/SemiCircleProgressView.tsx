import React, { PropsWithChildren } from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";

// type PropsWithChildren<P> = P & { children?: ReactNode };
interface IProps extends PropsWithChildren<ViewProps> {
  radius: number,
  bg: string
}

export const SemiCircleProgressView = (props: IProps) => {

  const calculateStyle = () => {
    const { radius, bg } = props;

    return StyleSheet.create({
      container: {
        width: radius * 2,
        height: radius, //所以是半圆
        borderRadius: radius,
        backgroundColor: bg
      }
    });
  };


  const dynamicStyle = calculateStyle();
  return (
    <View style={[styles.container, dynamicStyle.container, props.style]}>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  }
});