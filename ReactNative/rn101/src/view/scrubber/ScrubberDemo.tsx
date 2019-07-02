import React, { createRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Scrubber } from "./Scrubber";

export const ScrubberDemo = () => {
  const scrubber = createRef<View>();
  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push(i);
  }

  function onStart() {

  }

  return (
    <View>
      <Button title="start animation" onPress={onStart}/>
      <Scrubber ref={scrubber} dataSize={30}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});