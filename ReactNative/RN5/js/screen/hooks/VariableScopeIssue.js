import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const VariableScopeIssue = () => {
  const [count, setCount] = useState(0);
  const [computed, setComputed] = useState(0);

  console.log(`szw render before useEffect, count=${count}, computer=${computed}`);
  useEffect(() => {
    console.log(`szw render within useEffect, count=${count}, computer=${computed}`);
    setComputed(count + 1);
  }, [count]);
  console.log(`szw render after  useEffect, count=${count}, computer=${computed}`);

  let text = `count = ${count}, computed = ${computed}`;
  return (
    <View>
      <Text style={styles.text}> {text} </Text>
      <Button title={"+ 1"} onPress={() => setCount(count + 1)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 22
  }
});
