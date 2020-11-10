import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, useWindowDimensions, Animated } from "react-native";
import { ImageButton } from "../../../ui/button/ImageButton";
import Svg, { Circle } from "react-native-svg";

const data = [
  { color: "#3f51b5", next: "#e91e63" },
  { color: "#e91e63", next: "#4caf50" },
  { color: "#4caf50", next: "#a156c9" },
  { color: "#a156c9", next: "#3f51b5" },
];

export const SvgAnim09_ViewPagerTransition = () => {
  const [r, setR] = useState(new Animated.Value(10));
  const [index, setIndex] = useState(0);
  const { width, height } = useWindowDimensions();
  const maxSize = width > height ? width : height;

  const leftPressed = () => {
  };

  const rightPressed = () => {
    Animated.timing(r, {
      toValue: maxSize,
      duration: 500,
      useNativeDriver: true
    })
      .start(() => {
        console.log(`timing callback: index = `, index);
        const newIndex = (index + 1) % data.length;
        setIndex(newIndex);
        setR(new Animated.Value(10));
      });
  };

  const item = data[index];
  return (
    <View style={styles.root}>
      <RippleBg color={item.color} nextColor={item.next} r={r}/>
      <ImageButton size={60} source={require("../../../../res/img/ic_left.png")} onPressed={leftPressed} style={{ marginLeft: 20 }}/>
      <ImageButton size={60} source={require("../../../../res/img/ic_right.png")} onPressed={rightPressed} style={{ marginRight: 20 }}/>
    </View>
  );
};

interface IProps extends ViewProps {
  color: string;
  nextColor: string;
  r: Animated.Value
}

const AnimCircle = Animated.createAnimatedComponent(Circle);
export const RippleBg = (props: IProps) => {
  const { color, nextColor, r } = props;
  const { width, height } = useWindowDimensions();

  return (
    <Svg style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, backgroundColor: color }}>
      <AnimCircle cx={width / 2} cy={height - 50} r={r} fill={nextColor}/>
    </Svg>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center"
  }
});
