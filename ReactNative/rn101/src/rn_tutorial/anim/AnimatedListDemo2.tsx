import React, { Component } from "react";
import { FlatList, View, Text, Animated, Button, StyleSheet } from "react-native";


// 因为contentOffset只在ios上有效, 所以运行在android上没动画; 运行在ios上有动画

export class AnimatedListDemo2 extends Component {
  state = {
    offset: new Animated.ValueXY({ x: 0, y: 0 })
  };

  startAnim() {
    Animated.timing(this.state.offset, { toValue: { x: 0, y: 500 }, duration: 3000 }).start();
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
        <Button title="start" onPress={() => this.startAnim()}/>
        <AnimatedFlatList
          data={[{ key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }]}
          renderItem={(v: any) => <Text
            style={[styles.text, { backgroundColor: this.color(v.item) }]}>{v.index}. {v.item.key}</Text>}
          keyExtractor={(v: any) => v.index + ""}
          contentOffset={this.state.offset}
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
