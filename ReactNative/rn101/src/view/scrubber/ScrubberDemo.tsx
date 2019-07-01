import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import { Scrubber } from "./Scrubber";

interface IProps extends ViewProps {
}

export const ScrubberDemo = (props: IProps) => {

  const data = ["a", "b", "c", "d", "e", "f", "g"];
  return (
    <View>
      <Scrubber data={data}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});