import React, { useState } from "react";
import { SafeAreaView, Button, Animated, Easing } from "react-native";
import Svg, { Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const SvgAnim08_Path_Anim = () => {
  const [offset, setOffset] = useState(new Animated.Value(80));

  function startAnim() {
    Animated.timing(offset, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear
    }).start();
  }

  return (
    <SafeAreaView>
      <Button title="start anim" onPress={startAnim}/>
      <Svg viewBox="0 0 24 24" width={240} height={240}>
        <AnimatedPath d="M9 16.2 L4.8 12 l-1.4 1.4 L9 19 21 7 l-1.4 -1.4 z" stroke={"red"} strokeWidth={1}
                      strokeDashoffset={offset} strokeDasharray="80 80"/>
      </Svg>
    </SafeAreaView>
  );
};
