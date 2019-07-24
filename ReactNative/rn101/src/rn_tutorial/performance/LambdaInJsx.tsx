import React, { useState } from "react";
import { Button, View, Text, NativeSyntheticEvent, NativeTouchEvent } from "react-native";

export const LambdaInJsx = () => {
  const [pet, setPet] = useState("");

  function onClick(event: NativeSyntheticEvent<NativeTouchEvent>) {
    // @ts-ignore
    const name = event.currentTarget.dataset.pet!;
    // @ts-ignore
    const color = event.currentTarget.dataset.color!;
    console.log(`szw button click ${name} - ${color}`);
    setPet(name);
  }

  return (
    <View>
      <Text> favorite = {pet}</Text>
      <Button data-pet="cat" data-color="ginger" onPress={onClick} title="cat"/>
      <Button data-pet="dog" data-color="white" onPress={onClick} title="dog"/>
    </View>
  );
};