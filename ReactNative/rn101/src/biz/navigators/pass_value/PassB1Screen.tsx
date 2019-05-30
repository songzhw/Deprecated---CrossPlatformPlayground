import React from "react";
import { Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";

export const PassB1Screen = (props: NavigationScreenProps) => {
  const value = props.navigation.getParam("value", "empty/default");

  return (
    <View>
      <Text>B1 -- {value}</Text>
    </View>
  );
};
