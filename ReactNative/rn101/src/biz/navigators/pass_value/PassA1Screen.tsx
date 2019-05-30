import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationScreenProps } from "react-navigation";

export const PassA1Screen = (props: NavigationScreenProps) => {
  function onGo2B() {
    console.log(`szw click go2B`)
    props.navigation.navigate("PassB1Screen", { value: "what" });
  }

  return (
    <View>
      <Text>A1</Text>
      <Button title="go to B1" onPress={onGo2B}/>
    </View>
  );
};
