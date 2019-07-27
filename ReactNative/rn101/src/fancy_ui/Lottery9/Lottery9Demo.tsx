import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Lottery9 from "./Lottery9";

interface IProps extends ViewProps {
}

export const Lottery9Demo = (props: IProps) => {

  return (
    <View style={styles.container}>
      <Lottery9 style={styles.center}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {},
  center: {
    width: 690,
    height: 586,
    backgroundColor: "red"
  }
});