import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import { Triangle } from "../../ui/badger/Triangle";

interface IProps extends ViewProps {
}

export const BadgerDemo = (props: IProps) => {

  return (
    <View style={styles.container}>
      <Triangle width={150} height={150} color={"red"}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

