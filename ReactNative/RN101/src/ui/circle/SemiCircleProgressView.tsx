import React, { PropsWithChildren, useEffect, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated } from "react-native";

// type PropsWithChildren<P> = P & { children?: ReactNode };
interface IProps extends PropsWithChildren<ViewProps> {
  radius: number;
  bg: string;
  color: string;
  progressWidth: number;
  progress: number
}

export const SemiCircleProgressView = (props: IProps) => {
  const [degree, setDegree] = useState(new Animated.Value(0));

  const anim = () => {
    const toValue = props.progress;
    const speed = 2;

    Animated.spring(degree, {
      toValue,
      speed,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    anim();
  }, [props.radius, props.bg, props.color, props.progressWidth, props.progress]); //故意不设第二参, 所以componentDidMount与componentDidUpdate都会变化它
  // TODO 只设置props呢?


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
        top: radius //因为高度就是radius, 故这相当于把progress给推出去了
      },
      ring: {
        width: radius * 2,
        height: radius,
        borderRadius: radius,
        backgroundColor: color,
        transform: [
          { translateY: -radius / 2 },
          {
            // @ts-ignore
            rotate: degree.interpolate({
              inputRange: [0, 100],
              outputRange: ["0deg", "180deg"]
            })
          },
          { translateY: radius / 2 }
        ]
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
        <Animated.View style={[styles.ring, dynamicStyle.ring]}/>
      </View>

      <View style={[styles.space, dynamicStyle.space]}>
        {props.children}
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "green"
  },
  progress: {
    position: "absolute",
    left: 0
  },
  ring: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  space: {
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
});