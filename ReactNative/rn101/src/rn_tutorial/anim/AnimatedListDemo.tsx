import React from "react";
import { FlatList, View, Text } from "react-native";

interface IProps {
}

export const AnimatedListDemo = (props: IProps) => {

  const color = (item: any) => {
    if (item.key === "a") {
      return "gray";
    } else {
      return "powderblue";
    }
  };
  return (
    <View>
      <FlatList
        data={[{ key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }, { key: "a" }, { key: "b" }]}
        renderItem={({ item, index }) => <Text style={{ width: 200, height: 200, fontSize: 35, backgroundColor: color(item) }}>{index}. {item.key}</Text>}
        keyExtractor={(item, index) => index + ""}
        contentOffset={ {x: 0, y : 100}}
      />
    </View>
  );
};
