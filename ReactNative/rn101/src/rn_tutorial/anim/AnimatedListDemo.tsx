import React, { useState } from "react";
import { FlatList, View, Text, Animated, Button } from "react-native";

interface IProps {
}

export const AnimatedListDemo = (props: IProps) => {
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const [offset, setOffset] = useState(new Animated.Value(0));

  function startAnim() {
    Animated.timing(offset,
      { duration: 7000,
      toValue: offset.interpolate({
        inputRange: [0, 1000],
        output: [{x:0, y:0}, {x:0, y: 1000}]
      })}
      ).start();
  }

  const color = (item: any) => {
    if (item.key === "a") {
      return "gray";
    } else {
      return "powderblue";
    }
  };

  // @ts-ignore
  return (
    <View>
      <Button title="start" onPress={startAnim}/>
      <AnimatedFlatList
        data={[{ key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }]}
        renderItem={value => <Text style={{ width: 200, height: 200, fontSize: 35, backgroundColor: color(value.item) }}>{value.index}. {value.item.key}</Text>}
        keyExtractor={(item, index) => index + ""}
        contentOffset={ {x: 0, y : offset}}
      />
    </View>
  );
};
