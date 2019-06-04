import React, { Component, useState } from "react";
import { FlatList, View, Text, Animated, Button } from "react-native";

interface IProps {
}

export class AnimatedListDemo extends Component {
  state = {
    offset: new Animated.Value(0)
  }

   startAnim() {
    Animated.timing(this.state.offset, { toValue: 1000, duration: 7000 }).start();
  }

  color = (item: any) => {
    if (item.key === "a") {
      return "gray";
    } else {
      return "powderblue";
    }
  };

  offsetFunc = ()=>{
    return {
      x: 0,
      y: this.state.offset.interpolate({
        inputRange: [0, 1000],
        outputRange: [0, 1000]
      })
    }
  }

  // @ts-ignore
  render(){
    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
    return (
      <View>
        <Button title="start" onPress={this.startAnim}/>
        <AnimatedFlatList
          data={[{ key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }]}
          renderItem={value => <Text style={{ width: 300, height: 200, fontSize: 35, backgroundColor: this.color(value.item) }}>{value.index}. {value.item.key}</Text>}
          keyExtractor={(item, index) => index + ""}
          contentOffset={this.offsetFunc}
        />
      </View>
  );}
};
