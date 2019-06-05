import React from "react";
import { Button, View } from "react-native";
import { work10 } from "./Worker10";


export const UsingWork10Screen = () => {
  function onClick10() {
    work10("num10");
  }
  return (
    <View>
      <Button onPress={onClick10} title="Work Num3"/>
    </View>
  );
};
