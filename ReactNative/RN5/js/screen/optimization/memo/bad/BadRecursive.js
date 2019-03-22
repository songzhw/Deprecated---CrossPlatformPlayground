import React from "react";
import { View, Text } from "react-native";

function sleep(milliseconds) {
  let start = new Date();
  var now;
  while (true) {
    now = new Date();
    if (now - start >= milliseconds) {
      break;
    }
  }
}

// values : string[]
export const BadRecursive = ({ values }) => {
  if (values.length <= 0) {
    return null;
  }

  const [first, ...rest] = values;
  sleep(2);

  return (
    <View>
      <Text> {first} </Text>
      <BadRecursive values={rest}/>
    </View>
  );

};