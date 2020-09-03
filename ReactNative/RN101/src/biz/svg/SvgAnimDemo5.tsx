import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated, Button } from "react-native";
import Svg, { Circle } from "react-native-svg";

export const SvgAnimDemo5 = () => {
  const [animValue, setAnimValue] = useState(new Animated.Value(0));
  const [len, setLen] = useState(0);

  const anim = () => {
    animValue.addListener(({ value }) => {
      setLen(value);
    });

    Animated.timing(animValue, { toValue: 580, duration: 2000, useNativeDriver: true })
      .start();
  };

  return (
    <View>
      <Button title={"start anim"} onPress={anim}/>
      <Svg>
        <Circle x={200} y={100} r={70} fill="none"
                strokeWidth={5} stroke="blue" strokeDasharray={`${len} 1000`}/>
      </Svg>
    </View>
  );
};
