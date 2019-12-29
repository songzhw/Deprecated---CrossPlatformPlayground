import React from "react";
import { View, StyleSheet, Animated, Text, Button } from "react-native";
import { NumberScroller } from "./NumberScroller";

export class NumberAnimationDemo extends React.Component {
  numberView1: NumberScroller | null = null;
  numberView2: NumberScroller | null = null;
  numberView3: NumberScroller | null = null;

  startAnimation = () => {
    if (this.numberView1) {
      this.numberView1.startAnimation();
    }
    if (this.numberView2) {
      this.numberView2.startAnimation(145);
    }
    if (this.numberView3) {
      this.numberView3.startAnimation(350);
    }
  };

  resetAnimation = () => {
    if (this.numberView1) {
      this.numberView1.resetAnimation();
    }
    if (this.numberView2) {
      this.numberView2.resetAnimation();
    }
    if (this.numberView3) {
      this.numberView3.resetAnimation();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="start " onPress={this.startAnimation}/>
        <Button title="rest " onPress={this.resetAnimation}/>
        <NumberScroller ref={(c) => this.numberView1 = c}/>
        <NumberScroller ref={(c) => this.numberView2 = c}/>
        <NumberScroller ref={(c) => this.numberView3 = c}/>
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
