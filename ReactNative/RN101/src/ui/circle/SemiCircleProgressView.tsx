import React, { PropsWithChildren } from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";

// type PropsWithChildren<P> = P & { children?: ReactNode };
interface IProps extends PropsWithChildren<ViewProps> {
  radius: number;
  bg: string;
  color: string;
  progressWidth: number;

}

export const SemiCircleProgressView = (props: IProps) => {

  const calculateStyle = () => {
    const { radius, bg, color, progressWidth } = props;
    const innerRadius = radius - progressWidth;

    return StyleSheet.create({
      container: {
        width: radius * 2,
        height: radius, //所以是半圆
        borderRadius: radius,
        backgroundColor: bg
      },
      progress: {
        width: radius * 2,
        height: radius, //所以是半圆
        top: radius
      },
      inner: {
        width: radius * 2,
        height: radius,
        borderRadius: radius,
        backgroundColor: color,
      },
      space: {
        width: innerRadius * 2,
        height: innerRadius,
        borderRadius: innerRadius,
        backgroundColor: "white",
        top: progressWidth
      }
    });
  };


  const dynamicStyle = calculateStyle();
  return (
    <View style={[styles.container, dynamicStyle.container, props.style]}>
      <View style={[styles.progress, dynamicStyle.progress]}>
        <View style={[styles.inner, dynamicStyle.inner]}/>
      </View>

      <View style={[styles.space, dynamicStyle.space]}>
        {props.children}
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // overflow:"hidden",
    backgroundColor: 'green'
  },
  progress: {
    position: "absolute",
    left: 0
  },
  inner: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  space: {
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }
});