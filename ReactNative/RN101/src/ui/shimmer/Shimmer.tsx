import React, { useEffect, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated, Easing } from "react-native";
import Svg, { Circle, ClipPath, Defs, LinearGradient, Rect, Stop } from "react-native-svg";

interface IProps extends ViewProps {
  width: number;
  height: number;
  children: Element;

}

export const Shimmer = (props: IProps) => {
  const [anim, setAnim] = useState(new Animated.Value(0));
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    anim.addListener(({ value }: { value: number }) => {
      if (value - offset > 0.05) { //做一定限制, 免得动画过于频繁
        setOffset(value);
      }
    });

    startInfiniteAnimation();
    return () => {
      anim.removeAllListeners();
    };
  }, []);

  const startInfiniteAnimation = () => {
    Animated.timing(anim, { toValue: 1, duration: 1000, useNativeDriver: true })
      .start((event) => {
        if (event.finished) {
          anim.setValue(0);
          startInfiniteAnimation();
        }
      });
  };

  return (
    <Svg width={props.width} height={props.height} style={{ backgroundColor: "#0001" }}>
      <Defs>
        <ClipPath id="clip">
          {props.children}
        </ClipPath>

        <LinearGradient id={"shimmer"} x1={0} y1={0} x2={"100%"} y2={0}>
          <Stop stopColor="#ffebee" offset={offset - 1}/>
          <Stop stopColor="#b71c1c" offset={offset - 0.6}/>
          <Stop stopColor="#ffebee" offset={offset}/>
          <Stop stopColor="#b71c1c" offset={offset + 0.5}/>
          <Stop stopColor="#ffebee" offset={offset + 1}/>
        </LinearGradient>
      </Defs>

      <Rect x={0} y={0} width={240} height={200} clipPath="url(#clip)" fill="url(#shimmer)"/>
    </Svg>
  );
};

