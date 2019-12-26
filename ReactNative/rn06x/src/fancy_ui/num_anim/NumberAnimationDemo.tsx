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
        <Button title="start " onPress={this.startAnimation}/>
        <Button title="rest " onPress={this.resetAnimation}/>
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
      toValue: 300,
      duration: 2000
    }).start();
    Animated.spring(this.state.num2, {
      toValue: 300, bounciness: 6, speed: 1
    }).start();
    // spring没有duration哦!!! 控制有两种方式(两种组合)
  };

  private resetAnimation = () => {
    this.setState({
      animation: new Animated.Value(0),
      num2: new Animated.Value(0)
    });
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
