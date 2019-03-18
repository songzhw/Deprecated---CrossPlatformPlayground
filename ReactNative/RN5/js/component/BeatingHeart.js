import React from "react";
import { View, StyleSheet, Animated, Image } from "react-native";

const BeatingHeart = ({ scale }) => (
  <Animated.View style={[styles.heart, { transform: [{ scale: scale }] }]}>
    <Image source={require("../../assets/icon_red_heart.png")}
           resizeMode="contain"
           style={styles.heart}/>
  </Animated.View>
);

const styles = StyleSheet.create({
  heart: {
    width: 100,
    height: 100
  }
});

export default BeatingHeart;