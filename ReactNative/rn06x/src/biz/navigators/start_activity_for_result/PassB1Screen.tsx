import React from "react";
import { Button, Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";

export const PassB1Screen = (props: NavigationScreenProps) => {
  const value = props.navigation.getParam("value", "empty/default value");
  const callback = props.navigation.getParam("callback", () => console.log(`empty/default callback`));

  function onPickedImage() {
    const image = { src: "00.jpg", width: 100, height: 30 };
    callback(image);
    props.navigation.goBack();
  }

  return (
    <View>
      <Text>B1 -- {value}</Text>
      <Button title="pick images" onPress={onPickedImage}/>
    </View>
  );
};

PassB1Screen.navigationOptions = {
  title: "StartActivityForResult B1"
};
