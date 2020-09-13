import React, { useEffect, useRef, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Button, Animated } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";


const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const SvgAnimDemo7 = () => {
  // let _myCircle = createRef<Circle>() //这一行, 与下一行, 都是可以的. 不过都解决不了TypeScript的warning
  let _myCircle = useRef<Circle | null>(null);
  const [animRadius, setAnimRadius] = useState(new Animated.Value(546));

  useEffect(() => {
    animRadius.addListener((circleRadius) => {
      // @ts-ignore
      _myCircle.current.setNativeProps({ cx: circleRadius.value.toString() });
    });
  }, []);

  const startAnim = () => {
    Animated.spring(animRadius, { toValue: 211, friction: 10, useNativeDriver: true }).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title={"start anim"} onPress={startAnim}/>

      <Svg id="bottom-bar" x="0px" y="0px" width="100%" height="100" viewBox="0 0 1092 260">
        <Path fill={"blue"} stroke={"#f0f0f0"}
              d={`M30,60h357.3c17.2,0,31,14.4,30,31.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1C675.7,74.5,689.5,60,706.7,60H1062c16.6,0,30,13.4,30,30v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z`
              }/>
        <Circle ref={_myCircle}
                fill={"black"} stroke={"#f0f0f0"}
                cx="546" cy="100" r="100"/>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});
