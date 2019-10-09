import React, { createRef } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Scrubber } from "./Scrubber";

export const ScrubberDemo = () => {
  const SIZE = 13;
  const scrubber = createRef<Scrubber>();
  const data = [];
  for (let i = 0; i < SIZE; i++) {
    data.push(i);
  }

  function onStart() {
    scrubber.current!.scrollAutomatically();
  }

  return (
    <View>
      <Button title="start animation" onPress={onStart}/>
      <Scrubber ref={scrubber} dataSize={SIZE}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});