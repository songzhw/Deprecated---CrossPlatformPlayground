import React, { Component } from "react";
import { View, StyleSheet, Image, Animated } from "react-native";

class Pulse_Class_Screen extends Component {
  scale = new Animated.Value(1);

  componentDidMount() {
    // 500ms后执行动画
    setTimeout(() => this.pulse(), 500);
  }

  pulse = () => {
    // 顺序执行
    Animated.sequence([
      Animated.timing(this.scale, { toValue: 1.2 }),
      Animated.timing(this.scale, { toValue: 0.8 })
    ])
      .start(() => this.pulse());
    // 无限执行
  };

  render() {
    return (
      <View style={styles.root}>
        <Animated.View style={[styles.animHeart, { transform: [{ scale: this.scale }] }]}>
          <Image source={require("../../assets/icon_red_heart.png")}
                 resizeMode="contain"
                 style={styles.heart}/>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
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

export default Pulse_Class_Screen;