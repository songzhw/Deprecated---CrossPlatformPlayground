import React from "react";
import { Alert, Button } from "react-native";

export function HelloFunc({ name }) {
  const onClick = () => {
    setTimeout(() => Alert.alert(`Hello, I'm ${name}`), 3000);
  }; // 给足3秒钟, 让你有时间在Alert之前去做操作,

  // 注意, function不是class, 所以没有"this"关键字, 所以不是onPress={this.onClick}
  return (
    <Button title="FUNC (xxx)" onPress={onClick}/>
  );
}