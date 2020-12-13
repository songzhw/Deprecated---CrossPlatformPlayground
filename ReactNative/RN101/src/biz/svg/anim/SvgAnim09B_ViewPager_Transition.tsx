import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, useWindowDimensions, Animated, Dimensions } from "react-native";
import { ImageButton } from "../../../ui/button/ImageButton";
import Svg, { Circle } from "react-native-svg";
import { RippleTransitionBg } from "./RippleTransitionBg";
import { VpIndicator } from "./VpIndicator";


const { width, height } = Dimensions.get("window");
const cy = height - 50;
const middleX = width / 2;
const data = [
  { color: "#3f51b5", next: "#e91e63", cx: middleX - 50 },
  { color: "#e91e63", next: "#4caf50", cx: middleX - 17 },
  { color: "#4caf50", next: "#a156c9", cx: middleX + 17 },
  { color: "#a156c9", next: "#3f51b5", cx: middleX + 50 }
];

export const SvgAnim09B_ViewPagerTransition = () => {
  const [r, setR] = useState(new Animated.Value(10));
  const [index, setIndex] = useState(0);
  const { width, height } = useWindowDimensions();
  const maxSize = width > height ? width : height;

  const leftPressed = () => {
  };

  const rightPressed = () => {
    Animated.timing(r, {
      toValue: maxSize,
      duration: 250,
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
  const nextItem = data[(index + 1) % data.length];
  return (
    <View style={styles.root}>
      <RippleTransitionBg color={item.color} nextColor={item.next} r={r} cx={nextItem.cx} cy={cy}/>
      <VpIndicator data={data} cy={cy} r={10}/>
      <ImageButton size={60} source={require("../../../../res/img/ic_left.png")} onPressed={leftPressed} style={{ marginLeft: 20 }}/>
      <ImageButton size={60} source={require("../../../../res/img/ic_right.png")} onPressed={rightPressed} style={{ marginRight: 20 }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center"
  }
});
