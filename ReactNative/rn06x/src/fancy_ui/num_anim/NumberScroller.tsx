import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export class NumberScroller extends React.Component {
  numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  state = {
    animation: new Animated.Value(0)
  };

  transformStyle = {
    transform: [{
      translateY: this.state.animation
    }]
  };

  render() {
    return (
      <View style={styles.numberBox}>
        <Animated.View style={[(this.transformStyle)]}>
          {this.numbers.map(num => (
            <Text key={num} style={styles.numberText}>{num}</Text>
          ))}
        </Animated.View>
      </View>
    );
  }

  startAnimation = (delay = 0, duration = 1000, toValue = -320) => {
    setTimeout(() => this.start(duration, toValue), delay);
  };

  private start = (duration = 1000, toValue = -320) => {
    Animated.timing(this.state.animation, {
      toValue: toValue,
      duration: duration
    }).start();
  };

  resetAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 500
    }).start();
  };
}

const styles = StyleSheet.create({
  numberBox: {
    height: 40,
    overflow: "hidden"
  },
  numberText: {
    fontSize: 25
  }
});
