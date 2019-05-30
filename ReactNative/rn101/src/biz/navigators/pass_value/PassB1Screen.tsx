import React from "react";
import { Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";

export const PassB1Screen = (props: NavigationScreenProps) => {
  // @ts-ignore
  const { value } = props.navigation.state;

  return (
    <View>
      <Text>B1 -- {value}</Text>
    </View>
  );
};
