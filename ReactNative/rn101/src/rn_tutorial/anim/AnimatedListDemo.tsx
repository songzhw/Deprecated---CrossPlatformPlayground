import React, { Component, useState } from "react";
import { FlatList, View, Text, Animated, Button } from "react-native";


//TODO ERROR! (运行在android上没动画; 运行在ios上直接crash)

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

  render(){
    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
    // @ts-ignore
    return (
      <View>
        <Button title="start" onPress={this.startAnim}/>
        <AnimatedFlatList
          data={[{ key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }]}
          renderItem={({item, index}) => <Text style={{ width: 300, height: 200, fontSize: 35, backgroundColor: this.color(item) }}>{index}. {item.key}</Text>}
          keyExtractor={(item, index) => index + ""}
          contentOffset={{y: this.state.offset}}
        />
      </View>
  );}
};
