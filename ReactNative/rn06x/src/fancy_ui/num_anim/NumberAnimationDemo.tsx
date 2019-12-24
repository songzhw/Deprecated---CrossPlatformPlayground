import React from "react";
import { View, StyleSheet, TouchableHighlight, Animated } from "react-native";


class NumberAnimationDemo extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };

  render() {
    const transformStyle = {
      transform: [{
        translateY: this.state.animation
      }]
    };


    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.startAnimation}>
          <Animated.View style={[styles.square, transformStyle]}/>
        </TouchableHighlight>
      </View>
    );
  }

  private startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 2000
    }).start();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  square: {
    width: 190,
    height: 190,
    backgroundColor: ("#2E7D32")
  }
});

export default NumberAnimationDemo;

/*
1. 先做一个两位数字, 最后一位会做translateY的动画的看看
 */
