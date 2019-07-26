import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, TouchableHighlight, Animated } from "react-native";

const picture = require("../../../res/images/icon_red_heart.png");

export const SimpleHeroAnimDemo = () => {
  const [isDetail, setIsDetail] = useState(false);
  const imageDetail = isDetail ? picture : null;
  const modalClickable = isDetail ? "auto" : "none";
  const detailText = isDetail ? "DetailText" : null;
  const bg = isDetail ? "#ccc" : "#0000";
  const [width, setWidth] = useState(new Animated.Value(134));
  const [height, setHeight] = useState(new Animated.Value(125));
  const [left, setLeft] = useState(new Animated.Value(100))
  const [top, setTop] = useState(new Animated.Value(0))


  function openDetail() {
    setIsDetail(true);
    Animated.parallel([
      Animated.timing(width, { toValue: 320, duration: 3000 }),
      Animated.timing(height, { toValue: 300, duration: 3000 })
    ]).start();
  }

  function closeDetail() {
    setIsDetail(false);
    width.setValue(134);
    height.setValue(125);
  }

  return (
    <View style={styles.container}>
      <View style={styles.empty}/>
      <Image style={styles.iv1} source={picture}/>
      <Text onPress={openDetail}> List Screen </Text>

      <View style={[StyleSheet.absoluteFill, { backgroundColor: bg }]} pointerEvents={modalClickable}>
        <Animated.Image style={[styles.iv2, { width: width, height: height }]} source={imageDetail}/>
        <Text onPress={closeDetail}> {detailText} </Text>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1 },
  empty: {
    height: 200
  },
  iv1: {
    width: 134,
    height: 125,
    left: 100
  },
  iv2: {
    margin: 20
  }
});