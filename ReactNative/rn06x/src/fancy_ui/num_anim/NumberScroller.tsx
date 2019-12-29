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
            <Text key={num} style={{ height: 40 }}>{num}</Text>
          ))}
        </Animated.View>
      </View>
    );
  }

  startAnimation = (delay = 0) => {
    setTimeout(() => this.start(), delay);
  };

  private start = () => {
    Animated.timing(this.state.animation, {
      toValue: -310,
      duration: 1000
    }).start(()=>{
      this.setState({
        animation: new Animated.Value(0)
      });
    });
  };

  resetAnimation = () => {
    // Animated.timing(this.state.animation, {
    //   toValue: -310,
    //   duration: 1000
    // }).start();


    this.setState({
      animation: new Animated.Value(0)
    });
  };
}

const styles = StyleSheet.create({
  numberBox: {
    width: 40,
    height: 40,
    backgroundColor: ("#2E7D32"),
    overflow: "hidden"
  }
});
