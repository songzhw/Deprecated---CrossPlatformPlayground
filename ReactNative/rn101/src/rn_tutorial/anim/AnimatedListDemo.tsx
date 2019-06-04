import React, { useState } from "react";
import { FlatList, View, Text, Animated, Button } from "react-native";

interface IProps {
}

export const AnimatedListDemo = (props: IProps) => {
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const [offset, setOffset] = useState(new Animated.Value(0));

  function startAnim() {
    Animated.timing(offset, { toValue: 1000, duration: 7000 }).start();
  }

  const color = (item: any) => {
    if (item.key === "a") {
      return "gray";
    } else {
      return "powderblue";
    }
  };

  const offsetFunc = ()=>{
    return {
      x: 0,
      y: offset.interpolate({
        inputRange: [0, 1000],
        outputRange: [0, 1000]
      })
    }
  }

  // @ts-ignore
  return (
    <View>
      <Button title="start" onPress={startAnim}/>
      <AnimatedFlatList
        data={[{ key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }]}
        renderItem={value => <Text style={{ width: 300, height: 200, fontSize: 35, backgroundColor: color(value.item) }}>{value.index}. {value.item.key}</Text>}
        keyExtractor={(item, index) => index + ""}
        contentOffset={offsetFunc}
      />
    </View>
  );
};
