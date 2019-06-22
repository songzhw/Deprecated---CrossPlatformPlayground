import React, { Component } from "react";
import { Animated, Button, FlatList, StyleSheet, Text, View } from "react-native";

// TODO failed

export class AnimatedListDemo2 extends Component {
  state = {
    offset: 0
  };
  private interval: number | null = null;

  startAnim() {
    // Animated.timing(this.state.offset, { toValue: 1000, duration: 7000 }).start();
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
    // @ts-ignore
    return (
      <View>
        <Button title="start" onPress={()=> this.startAnim()}/>
        <FlatList
          data={[{ key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }]}
          renderItem={({ item, index }) => <Text
            style={[styles.text, { backgroundColor: this.color(item) }]}>{index}. {item.key}</Text>}
          keyExtractor={(item, index) => index + ""}
          contentContainerStyle={{position:'absolute', top:100, left:0}}
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
