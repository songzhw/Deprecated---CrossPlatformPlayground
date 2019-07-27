import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Lottery9 from "./Lottery9";

interface IProps extends ViewProps {
}

export const Lottery9Demo = (props: IProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.center}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey"
  },
  center: {
    width: 345,
    height: 293,

    backgroundColor: "red"
  }
});