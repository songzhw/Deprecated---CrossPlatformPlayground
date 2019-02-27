import React from "react";
import { View, StyleSheet, Animated, Image } from "react-native";

const BeatingHeart = ({ scale }) => (
  <Animated.View style={[styles.animHeart, { transform: [{ scale: scale }] }]}>
    <Image source={require("../../assets/icon_red_heart.png")}
           resizeMode="contain"
           style={styles.heart}/>
  </Animated.View>
);

const styles = StyleSheet.create({
  animHeart: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 100
  },
  heart: {
    width: 200,
    height: 200
  }
});

export default BeatingHeart;