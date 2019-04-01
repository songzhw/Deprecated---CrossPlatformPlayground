import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const VariableScopeIssue = () => {
  const [count, setCount] = useState(0);
  const [computed, setComputed] = useState(0);

  useEffect(() => {
    setComputed(count + 1);
  }, [count]);

  let text = `count = ${count}, computed = ${computed}`;
  return (
    <View>
      <Text> {text} </Text>
      <Button title={"+ 1"} onPress={() => setCount(count + 1)}/>
    </View>
  );
};
