import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Scrubber } from "./Scrubber";

export const ScrubberDemo = () => {

  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push(i);
  }
  return (
    <View>
      <Scrubber dataSize={30}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});