import React, { Component } from "react";
import { FlatList, View, Text, Animated, Button, StyleSheet } from "react-native";


export class AnimatedListDemo3 extends Component {
  state = {
    offset: 0
  };
  private interval: number | null = null;
  private list: FlatList<any> | null = null;

  startAnim() {
    // Animated.timing(this.state.offset, { toValue: 1000, duration: 7000 }).start();
    // @ts-ignore
    this.interval = setInterval(() => {
      const value = this.state.offset + 50;
      this.setState({ offset: value });
      this.list!.scrollToOffset({ offset: value });

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
        <Button title="start" onPress={() => this.startAnim()}/>
        <FlatList
          ref={c => this.list = c}
          data={[{ key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }]}
          renderItem={({ item, index }) => <Text
            style={[styles.text, { backgroundColor: this.color(item) }]}>{index}. {item.key}</Text>}
          keyExtractor={(item, index) => index + ""}
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
