import React from "react";
import { View, StyleSheet, TouchableHighlight, Animated, Text, Button } from "react-native";


class NumberAnimationDemo extends React.Component {
  state = {
    animation: new Animated.Value(0),
    num2: new Animated.Value(0)
  };

  render() {
    const transformStyle = {
      transform: [{
        translateY: this.state.animation
      }]
    };
    const transformStyle2 = {
      transform: [{
        translateY: this.state.num2
      }]
    };


    return (
      <View style={styles.container}>
        <Button title="start animation" onPress={this.startAnimation}/>
        <Animated.View style={[transformStyle]}>
          <Text> 200 </Text>
        </Animated.View>
        <Animated.View style={[transformStyle2]}>
          <Text> 200 </Text>
        </Animated.View>
      </View>
    );
  }

  private startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 100,
      duration: 1000
    }).start();
    Animated.spring(this.state.num2, {
      toValue: 100, tension: 40, friction: 10
    }).start();
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
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
