import React, { Component } from "react";
import { FlatList, View, Text, Animated, Button, StyleSheet } from "react-native";


// 因为contentOffset只在ios上有效, 所以运行在android上没动画; 运行在ios上有动画

export class AnimatedListDemo extends Component {
  state = {
    offset: 0
  };
  private interval: number | null = null;

  startAnim() {
    // Animated.timing(this.state.offset, { toValue: 1000, duration: 7000 }).start();
    // @ts-ignore
    this.interval = setInterval(() => {
      this.setState({ offset: this.state.offset + 50 });
    }, 500);
    // this.setState({ offset: 200 });
  }

  componentWillUnmount(): void {
    if (this.interval !== null) {
      clearInterval(this.interval);
    }
  }

  color = (item: any) => {
    if (item.key === "a") {
      return "gray";
    } else {
      return "powderblue";
    }
  };

  render() {
    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
    return (
      <View>
        <Button title="start" onPress={()=> this.startAnim()}/>
        <FlatList
          data={[{ key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }]}
          renderItem={({ item, index }) => <Text
            style={[styles.text, { backgroundColor: this.color(item) }]}>{index}. {item.key}</Text>}
          keyExtractor={(item, index) => index + ""}
          contentOffset={{ x: 0, y: this.state.offset }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    width: 300,
    height: 200,
    fontSize: 35
  }
});
