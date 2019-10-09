import React, { useState } from "react";
import { Button, View, Text, NativeSyntheticEvent, NativeTouchEvent } from "react-native";

/*
1. https://ozmoroz.com/2018/07/pass-value-to-onclick-react/ data-* properties only works for React
2. I tried, dataset does not work on React Native, since the event.currentTarget does not have a dataset property
 */
export const LambdaInJsx = () => {
  const [pet, setPet] = useState("");

  function onClick(event: NativeSyntheticEvent<NativeTouchEvent>) {
    // const name = event.currentTarget.dataset.pet!;
    // const color = event.currentTarget.dataset.color!;
    // console.log(`szw button click ${name} - ${color}`);
    // setPet(name);
  }

  return (
    <View>
      <Text> favorite = {pet}</Text>
      <Button data-pet="cat" data-color="ginger" onPress={onClick} title="cat"/>
      <Button data-pet="dog" data-color="white" onPress={onClick} title="dog"/>
    </View>
  );
};