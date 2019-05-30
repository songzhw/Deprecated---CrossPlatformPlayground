import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { NavigationScreenProps } from "react-navigation";

export const PassA1Screen = (props: NavigationScreenProps) => {
  const [valueFromB, setValueFromB] = useState({});

  function onActivityResult(result: any) {
    console.log(`szw onActivityResult = `, result);
    setValueFromB(result);
  }

  function onGo2B() {
    console.log(`szw click go2B`);
    props.navigation.navigate("PassB1Screen",
      { value: "what", callback: onActivityResult });
  }

  return (
    <View>
      <Text>A1 {JSON.stringify(valueFromB)}</Text>
      <Button title="go to B1" onPress={onGo2B}/>
    </View>
  );
};


PassA1Screen.navigationOptions = {
  title: "StartActivityForResult A1"
};


