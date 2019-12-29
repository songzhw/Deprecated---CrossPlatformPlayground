import React from "react";
import { View, StyleSheet, Animated, Text, Button } from "react-native";
import { NumberScroller } from "./NumberScroller";

export class NumberAnimationDemo extends React.Component {

  numberView1: NumberScroller | null = null;

  startAnimation = () => {
    if (this.numberView1) {
      this.numberView1.startAnimation();
    }
  };

  resetAnimation = () => {
    if (this.numberView1) {
      this.numberView1.resetAnimation();
    }
  };


  render() {
    return (
      <View style={styles.container}>
        <Button title="start " onPress={this.startAnimation}/>
        <Button title="rest " onPress={this.resetAnimation}/>
        <NumberScroller ref={(c) => this.numberView1 = c}/>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  }
});


/*
1. 先做一个两位数字, 最后一位会做translateY的动画的看看
 */
