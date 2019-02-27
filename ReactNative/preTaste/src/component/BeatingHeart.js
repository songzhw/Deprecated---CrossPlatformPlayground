import React from "react";
import { View, StyleSheet, Animated, Image } from "react-native";

class BeatingHeart extends React.Component {
  state = {};

  render() {
    return (
      <Animated.View style={[styles.animHeart, { transform: [{ scale: this.props.scale }] }]}>
        <Image source={require("../../assets/icon_red_heart.png")}
               resizeMode="contain"
               style={styles.heart}/>
      </Animated.View>
    );
  }
}

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