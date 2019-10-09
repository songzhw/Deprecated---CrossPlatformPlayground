import React, { Component } from "react";
import { FlatList, View, Text, Animated, Button, StyleSheet } from "react-native";


export class AnimatedListDemo3 extends Component {
  private interval: number | null = null;
  private list: FlatList<any> | null = null;
  private offset: number = 0;

  startAnim() {
    // @ts-ignore
    this.interval = setInterval(() => {
      this.offset = this.offset + 50;
      this.list!.scrollToOffset({ animated: false, offset: this.offset });

    }, 500);
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
