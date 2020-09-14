import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import { Triangle } from "../../ui/badger/Triangle";

const hyp = (a:number, b: number) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

export const BadgerDemo = () => {

  return (
    <View>
      <Triangle width={150} height={150} color={"red"}/>
      <View style={{position: "absolute", top: 50, left: -50,
        transform: [{rotate: "145deg"}],
        backgroundColor: "blue", width: 100, height: 100}}/>
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

